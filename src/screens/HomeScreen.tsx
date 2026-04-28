import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../components/Header';
import AddButton from '../components/AddButton';
import NoteCard from '../components/NoteCard';
import { colors } from '../theme/colors';
import { Note } from '../types';

const HomeScreen = ({ navigation }: any) => {
  const [notes, setNotes] = useState<Note[]>([]);

  const loadNotes = useCallback(async () => {
    try {
      const savedNotes = await AsyncStorage.getItem('notes');
      setNotes(savedNotes ? JSON.parse(savedNotes) : []);
    } catch (error) {
      console.log('Notlar yüklenirken hata:', error);
      setNotes([]);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadNotes();
    }, [loadNotes])
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Notlarım" />

      {notes.length === 0 ? (
        <View style={styles.emptyContainer}>
          <View style={styles.emptyIconCircle}>
            <Text style={styles.emptyIcon}>+</Text>
          </View>
          <Text style={styles.emptyTitle}>Henüz notun yok</Text>
          <Text style={styles.emptyText}>İlk notunu eklemek için sağ alttaki butona dokun.</Text>
        </View>
      ) : (
        <FlatList
          data={notes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <NoteCard
              note={item}
              onPress={() => navigation.navigate('NoteDetail', { note: item })}
            />
          )}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />
      )}

      <AddButton onPress={() => navigation.navigate('AddNote')} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  listContainer: {
    padding: 20,
    paddingBottom: 110,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 36,
    paddingBottom: 70,
  },
  emptyIconCircle: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 22,
  },
  emptyIcon: {
    color: colors.primary,
    fontSize: 44,
    fontWeight: 'bold',
    marginTop: -4,
  },
  emptyTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 8,
    textAlign: 'center',
  },
  emptyText: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 22,
    textAlign: 'center',
  },
});

export default HomeScreen;
