import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  SafeAreaView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from '../theme/colors';
import { Note } from '../types';

const NoteDetailScreen = ({ route, navigation }: any) => {
  const note = route.params.note as Note;

  const handleDelete = async () => {
    Alert.alert('Notu Sil', 'Bu notu kalıcı olarak silmek istediğine emin misin?', [
      { text: 'Vazgeç', style: 'cancel' },
      {
        text: 'Sil',
        style: 'destructive',
        onPress: async () => {
          try {
            const savedNotes = await AsyncStorage.getItem('notes');
            const notesArray: Note[] = savedNotes ? JSON.parse(savedNotes) : [];
            const updatedNotes = notesArray.filter((item) => item.id !== note.id);

            await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
            navigation.goBack();
          } catch (error) {
            console.log('Silme hatası:', error);
            Alert.alert('Hata', 'Not silinirken bir sorun oluştu.');
          }
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.7}>
            <Text style={styles.backButton}>← Geri</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleDelete} activeOpacity={0.7}>
            <Text style={styles.deleteText}>Sil</Text>
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer}>
          <Text style={styles.date}>{note.date}</Text>
          <Text style={styles.title}>{note.title}</Text>
          <Text style={styles.content}>{note.content}</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 25,
    paddingTop: 14,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  backButton: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: 'bold',
  },
  deleteText: {
    color: colors.error,
    fontSize: 18,
    fontWeight: 'bold',
  },
  contentContainer: {
    paddingBottom: 30,
  },
  date: {
    color: colors.textSecondary,
    fontSize: 14,
    marginBottom: 10,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    color: colors.textPrimary,
    fontSize: 18,
    lineHeight: 28,
  },
});

export default NoteDetailScreen;
