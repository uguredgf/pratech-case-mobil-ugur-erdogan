# Quick Note Mini Sprint 📝

Quick Note, kullanıcıların hızlıca not oluşturmasını, listelemesini, detayını görüntülemesini ve silebilmesini sağlayan **React Native CLI** ile geliştirilmiş bir mobil uygulamadır.

Bu proje, Pratech stajyer case çalışması kapsamında Figma tasarımlarına "Pixel-Perfect" (birebir) sadık kalınarak hazırlanmıştır.

## ✨ Özellikler

- **Home Ekranı:** Not listesi görüntüleme ve kullanıcı yönlendirici şık "Boş State" tasarımı.
- **Not Yönetimi:** Başlık ve içerik boşluk kontrolü (validation) ile güvenli yeni not ekleme.
- **Not Detayı & Silme:** Not detaylarını okuma ve onay kutusu (Alert) ile güvenli silme işlemi.
- **Kalıcı Veri (Ekstra):** Beklenti sadece state yönetimi olmasına rağmen, en iyi kullanıcı deneyimi için notların cihazda kalıcı saklanmasını sağlayan `AsyncStorage` entegrasyonu.
- **Modern UI/UX (Bonus):** Figma tasarımlarına %100 uyumlu **Dark Theme (Karanlık Mod)** renk paleti ve tipografik düzen.
- **Kusursuz Mobil Deneyim:** Çentikli ekranlar için `SafeAreaView` ve klavye çakışmaları için `KeyboardAvoidingView` kullanımı.

## 🛠️ Kullanılan Teknolojiler

- React Native CLI
- TypeScript (Tip Güvenliği)
- React Navigation (Native Stack)
- AsyncStorage
- React Native Safe Area Context

## 🎨 Tasarım (Figma)

Uygulamanın arayüzü Figma üzerinde tasarlanmış ve kodlamaya geçilmeden önce tüm etkileşimleri prototiplenmiştir.
**Figma Linki:** [Quick Note - Figma Design](https://www.figma.com/make/zFacTLrLsfI3kEjj2tVDmX/Mobile-Note-Taking-App-clean?t=oniuReyWuF5tKZzj-1)

## 🚀 Kurulum ve Çalıştırma

Projeyi yerel bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyebilirsiniz:

1. **Projeyi klonlayın:**
   ```bash
   git clone [https://github.com/uguredgf/pratech-case-mobil-ugur-erdogan.git](https://github.com/uguredgf/pratech-case-mobil-ugur-erdogan.git)
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
