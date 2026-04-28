# Quick Note Mini Sprint

Quick Note, kullanıcıların hızlıca not oluşturmasını, notlarını listelemesini, detayını görüntülemesini ve silebilmesini sağlayan React Native CLI ile geliştirilmiş bir mobil uygulamadır.

Bu proje, Pratech stajyer case çalışması kapsamında Figma tasarımlarına sadık kalınarak hazırlanmıştır.

## Özellikler

- Home ekranında not listesi görüntüleme
- Kullanıcıyı yönlendiren boş state tasarımı
- Başlık ve içerik kontrolü ile yeni not ekleme
- Not detayını görüntüleme
- Alert onayı ile not silme
- AsyncStorage ile notları cihazda kalıcı saklama
- Dark theme renk paleti
- SafeAreaView ve KeyboardAvoidingView kullanımı

## Kullanılan Teknolojiler

- React Native CLI
- TypeScript
- React Navigation Native Stack
- AsyncStorage
- React Native Safe Area Context

## Tasarım

Uygulamanın arayüzü Figma üzerinde tasarlanmıştır.

**Figma linki:**

https://www.figma.com/make/zFacTLrLsfI3kEjj2tVDmX/Mobile-Note-Taking-App-clean?t=oniuReyWuF5tKZzj-1

## Kurulum ve Çalıştırma

1. **Projeyi klonlayın:**
   ```bash
   git clone https://github.com/uguredgf/pratech-case-mobil-ugur-erdogan.git
   ```
2. **Proje klasörüne girin ve bağımlılıkları yükleyin:**
   ```bash
   cd pratech-case-mobil-ugur-erdogan
   npm install
   ```
3. **Metro Bundler'ı önbelleği temizleyerek başlatın:**
   ```bash
   npm start -- --reset-cache
   ```
4. **Android için uygulamayı çalıştırın (Farklı bir terminalde):**
   ```bash
   npm run android
   ```
