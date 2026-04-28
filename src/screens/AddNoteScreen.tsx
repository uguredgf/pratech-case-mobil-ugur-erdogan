import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
  SafeAreaView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from '../theme/colors';
import { Note } from '../types';

const AddNoteScreen = ({ navigation }: any) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSave = async () => {
    const trimmedTitle = title.trim();
    const trimmedContent = content.trim();

    if (!trimmedTitle || !trimmedContent) {
      Alert.alert('Eksik Bilgi', 'Lütfen başlık ve içerik alanlarını doldurun.');
      return;
    }

    const newNote: Note = {
      id: Date.now().toString(),
      title: trimmedTitle,
      content: trimmedContent,
      date: new Date().toLocaleDateString('tr-TR'),
    };

    try {
      const existingNotes = await AsyncStorage.getItem('notes');
      const notesArray: Note[] = existingNotes ? JSON.parse(existingNotes) : [];

      await AsyncStorage.setItem('notes', JSON.stringify([newNote, ...notesArray]));
      navigation.goBack();
    } catch (error) {
      console.log('Kaydetme hatası:', error);
      Alert.alert('Hata', 'Not kaydedilirken bir sorun oluştu.');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.7}>
            <Text style={styles.backButton}>← İptal</Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Yeni Not</Text>

          <View style={styles.headerSpacer} />
        </View>

        <View style={styles.formContainer}>
          <TextInput
            style={styles.inputTitle}
            placeholder="Not Başlığı..."
            placeholderTextColor={colors.textSecondary}
            value={title}
            onChangeText={setTitle}
            autoFocus
            autoCapitalize="sentences"
          />

          <TextInput
            style={styles.inputContent}
            placeholder="Düşüncelerini buraya yaz..."
            placeholderTextColor={colors.textSecondary}
            multiline
            textAlignVertical="top"
            value={content}
            onChangeText={setContent}
            autoCapitalize="sentences"
          />
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave} activeOpacity={0.85}>
          <Text style={styles.saveButtonText}>Notu Kaydet</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  backButton: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerTitle: {
    color: colors.textPrimary,
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerSpacer: {
    width: 52,
  },
  formContainer: {
    flex: 1,
  },
  inputTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textPrimary,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingVertical: 15,
    marginBottom: 20,
  },
  inputContent: {
    flex: 1,
    fontSize: 16,
    color: colors.textPrimary,
    lineHeight: 24,
  },
  saveButton: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    borderRadius: 14,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddNoteScreen;