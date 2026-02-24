export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    coverImage: string;
    categoryId: string;
    tagIds: string[];
    author: {
        name: string;
        avatar: string;
        role: string;
    };
    status: 'published' | 'draft';
    publishedAt: string;
    metaTitle?: string;
    metaDescription?: string;
    readingTime: number;
}

export const blogPosts: BlogPost[] = [
    {
        id: 'post-1',
        title: '5 Kesalahan Fatal Saat Memilih Judul Skripsi (Dan Cara Menghindarinya)',
        slug: '5-kesalahan-fatal-memilih-judul-skripsi',
        excerpt: 'Banyak mahasiswa langsung ditolak dosen bukan karena penelitiannya jelek, tapi karena judul skripsinya memiliki kelemahan mendasar. Ketahui 5 kesalahan paling umum dan cara mengatasinya.',
        coverImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80',
        categoryId: 'cat-1',
        tagIds: ['tag-1', 'tag-3', 'tag-8'],
        author: { name: 'Tim Dosbing.ai', avatar: 'TD', role: 'Academic Content Team' },
        status: 'published',
        publishedAt: '2026-02-20T07:00:00Z',
        metaTitle: '5 Kesalahan Fatal Memilih Judul Skripsi | Dosbing.ai',
        metaDescription: 'Hindari 5 kesalahan umum yang membuat judul skripsimu ditolak dosen. Panduan lengkap dari tim akademik Dosbing.ai.',
        readingTime: 7,
        content: `<h2>Mengapa Judul Skripsi Itu Krusial?</h2>
<p>Judul skripsi adalah <strong>kesan pertama</strong> yang dosen pembimbingmu lihat. Sebelum membaca satu bab pun, dosen sudah bisa menilai apakah penelitianmu layak dilanjutkan atau tidak hanya dari judulnya. Sayangnya, banyak mahasiswa meremehkan hal ini.</p>
<p>Berikut adalah 5 kesalahan paling fatal yang sering terjadi — dan yang lebih penting, cara menghindarinya.</p>

<h2>1. Judul Terlalu Luas dan Tidak Spesifik</h2>
<p>Contoh judul bermasalah: <em>"Pengaruh Media Sosial terhadap Mahasiswa."</em></p>
<p>Judul ini terlalu umum. Media sosial yang mana? Mahasiswa yang mana? Pengaruh terhadap apa? Dosen akan langsung mempertanyakan ini.</p>
<ul>
  <li><strong>Solusi:</strong> Sempitkan variabel, populasi, dan konteks. Contoh yang lebih baik: <em>"Pengaruh Intensitas Penggunaan Instagram terhadap Tingkat Kecemasan Akademik Mahasiswa Semester Akhir di Universitas Indonesia."</em></li>
</ul>

<h2>2. Tidak Memiliki Research Gap yang Jelas</h2>
<p>Dosen akan selalu bertanya: <em>"Apa bedanya penelitianmu dengan yang sudah ada?"</em> Jika kamu tidak bisa menjawabnya, judul kamu belum siap.</p>
<ul>
  <li><strong>Solusi:</strong> Lakukan mini literature review. Cari 3–5 penelitian terdahulu dengan topik serupa, lalu identifikasi celah yang belum diteliti (variabel baru, lokasi berbeda, periode waktu berbeda, dll.).</li>
</ul>

<h2>3. Variabel yang Tidak Bisa Diukur</h2>
<p>Judul yang mengandung konsep abstrak seperti "kebahagiaan," "kesuksesan," atau "kualitas hidup" tanpa instrumen pengukuran yang jelas akan sulit dipertanggungjawabkan secara ilmiah.</p>
<ul>
  <li><strong>Solusi:</strong> Pastikan setiap variabel dalam judulmu memiliki indikator yang terukur dan sudah ada skala pengukurannya (misalnya, skala Likert untuk kepuasan kerja).</li>
</ul>

<h2>4. Judul Tidak Sesuai dengan Bidang Keilmuan</h2>
<p>Mahasiswa Manajemen yang mengambil judul terlalu teknis (statistik mendalam / pemrograman) sering kesulitan saat bimbingan karena melampaui kompetensi yang diharapkan di prodinya.</p>
<ul>
  <li><strong>Solusi:</strong> Sesuaikan kompleksitas metodologi dengan standar program studimu. Konsultasikan dengan teman satu angkatan atau senior yang sudah sidang.</li>
</ul>

<h2>5. Judul Tidak Memiliki Urgensi</h2>
<p>"Kenapa penelitian ini penting dilakukan <em>sekarang</em>?" Ini adalah pertanyaan yang harus bisa kamu jawab. Jika isu yang kamu angkat sudah usang atau tidak relevan dengan kondisi terkini, dosen bisa menolaknya.</p>
<ul>
  <li><strong>Solusi:</strong> Hubungkan topikmu dengan isu terkini — bisa berupa kebijakan pemerintah terbaru, tren industri, atau permasalahan sosial yang sedang viral dibahas.</li>
</ul>

<h2>Solusi Cerdas: Validasi Judul Sebelum ke Dosen</h2>
<p>Sebelum berani menemui dosen pembimbing, ada baiknya kamu memvalidasi judul skripsimu terlebih dahulu. Inilah keunggulan menggunakan <strong>Dosbing.ai</strong> — sistem kami akan menganalisis judulmu berdasarkan 4 Pilar Akademik: <strong>Necessity (Urgensi), Novelty (Kebaruan), Relevance (Kesesuaian), dan Feasibility (Kelayakan)</strong>.</p>
<p>Kamu akan mendapatkan skor validasi, justifikasi ilmiah, dan bahkan draft kuesioner — semua dalam waktu kurang dari 15 menit. Cukup seharga dua gelas kopi! ☕</p>`,
    },
    {
        id: 'post-2',
        title: 'Panduan Lengkap Menulis Bab 1 Skripsi yang Disetujui Dosen dalam Sekali Bimbingan',
        slug: 'panduan-lengkap-menulis-bab-1-skripsi',
        excerpt: 'Bab 1 adalah fondasi seluruh skripsimu. Jika Bab 1 kuat, sisa bab lainnya akan jauh lebih mudah. Pelajari struktur ideal Latar Belakang, Rumusan Masalah, Tujuan, hingga Manfaat Penelitian.',
        coverImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80',
        categoryId: 'cat-1',
        tagIds: ['tag-1', 'tag-2', 'tag-8'],
        author: { name: 'Tim Dosbing.ai', avatar: 'TD', role: 'Academic Content Team' },
        status: 'published',
        publishedAt: '2026-02-18T07:00:00Z',
        metaTitle: 'Panduan Menulis Bab 1 Skripsi | Dosbing.ai',
        metaDescription: 'Struktur ideal penulisan Bab 1 skripsi agar langsung disetujui dosen dalam sekali bimbingan. Dari Latar Belakang hingga Manfaat Penelitian.',
        readingTime: 10,
        content: `<h2>Kenapa Bab 1 Sering Jadi Batu Sandungan?</h2>
<p>Mayoritas mahasiswa yang mandek di skripsi bukan karena tidak bisa melakukan penelitian — melainkan karena mereka tidak punya fondasi yang kuat di Bab 1. Ketika Bab 1 lemah, seluruh struktur skripsi ikut goyang.</p>

<h2>Struktur Bab 1 yang Ideal</h2>
<p>Meskipun setiap kampus memiliki pedoman yang sedikit berbeda, struktur umum Bab 1 yang diterima secara luas adalah sebagai berikut:</p>

<h3>1.1 Latar Belakang Masalah</h3>
<p>Ini adalah bagian terpanjang dan terpenting. Tulis seperti kamu sedang "membangun kasus" kepada juri. Alurnya harus seperti ini:</p>
<ul>
  <li><strong>Makro (Global/Nasional):</strong> Mulai dari konteks besar — data statistik, tren global, atau kebijakan nasional yang relevan.</li>
  <li><strong>Meso (Industri/Bidang):</strong> Perkecil ke sektor atau bidang yang kamu teliti.</li>
  <li><strong>Mikro (Objek Penelitian):</strong> Fokus ke objek spesifik penelitianmu dan identifikasi masalah yang ada.</li>
  <li><strong>Research Gap:</strong> Tunjukkan bahwa belum ada yang meneliti isu ini dari sudut pandang yang kamu tawarkan.</li>
</ul>

<h3>1.2 Identifikasi Masalah</h3>
<p>Daftarkan semua masalah potensial yang kamu temukan dari Latar Belakang. Tidak harus semuanya diteliti — ini hanyalah pemetaan masalah.</p>

<h3>1.3 Pembatasan Masalah</h3>
<p>Di sini kamu menyatakan bahwa dari sekian banyak masalah yang ada, kamu hanya akan fokus pada masalah X, Y, dan Z. Ini menunjukkan kesadaran akan batas kemampuan dan sumber dayamu.</p>

<h3>1.4 Rumusan Masalah</h3>
<p>Ubah masalah yang sudah dibatasi menjadi pertanyaan penelitian yang spesifik dan terukur. Hindari pertanyaan yang jawabannya hanya "Ya" atau "Tidak."</p>
<p><strong>Contoh yang baik:</strong> "Seberapa besar pengaruh intensitas penggunaan Instagram terhadap tingkat kecemasan akademik mahasiswa semester akhir?"</p>

<h3>1.5 Tujuan Penelitian</h3>
<p>Jawab langsung pertanyaan di Rumusan Masalah dalam bentuk pernyataan tujuan. Setiap rumusan masalah harus memiliki satu tujuan yang sesuai.</p>

<h3>1.6 Manfaat Penelitian</h3>
<p>Bagi menjadi dua: <strong>Manfaat Teoritis</strong> (kontribusi pada ilmu pengetahuan) dan <strong>Manfaat Praktis</strong> (siapa yang bisa menggunakan hasil penelitianmu dan untuk apa).</p>

<h2>Tips Pro dari Mahasiswa yang Sudah Sidang</h2>
<ul>
  <li>Kumpulkan data/statistik terlebih dahulu <em>sebelum</em> mulai menulis Latar Belakang. Jangan menulis dulu baru cari data.</li>
  <li>Satu paragraf = satu ide. Hindari paragraf yang terlalu panjang (lebih dari 5 kalimat).</li>
  <li>Gunakan kutipan dari jurnal ilmiah, bukan dari blog atau Wikipedia.</li>
  <li>Minta feedback dari teman satu bimbingan — perspektif orang lain sangat membantu.</li>
</ul>`,
    },
    {
        id: 'post-3',
        title: 'Bagaimana AI Mengubah Cara Mahasiswa Mengerjakan Skripsi di 2026',
        slug: 'ai-mengubah-cara-mahasiswa-mengerjakan-skripsi-2026',
        excerpt: 'Dari generator judul hingga analisis data otomatis, AI kini menjadi partner penelitian yang semakin populer. Tapi bagaimana cara memanfaatkannya secara etis dan efektif?',
        coverImage: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
        categoryId: 'cat-4',
        tagIds: ['tag-9', 'tag-1', 'tag-10'],
        author: { name: 'Tim Dosbing.ai', avatar: 'TD', role: 'Academic Content Team' },
        status: 'published',
        publishedAt: '2026-02-15T07:00:00Z',
        metaTitle: 'AI dan Skripsi Mahasiswa 2026 | Dosbing.ai',
        metaDescription: 'Bagaimana pemanfaatan AI secara etis dalam proses pengerjaan skripsi. Panduan lengkap untuk mahasiswa semester akhir.',
        readingTime: 8,
        content: `<h2>Era Baru Penulisan Akademik</h2>
<p>Tidak bisa dipungkiri: AI generatif telah masuk ke dalam kehidupan akademik mahasiswa. Survei terbaru menunjukkan lebih dari 60% mahasiswa di Indonesia menggunakan setidaknya satu alat berbasis AI dalam proses mengerjakan skripsi mereka. Pertanyaannya bukan lagi <em>"apakah boleh?"</em> tapi <em>"bagaimana cara yang benar?"</em></p>

<h2>AI Sebagai Partner, Bukan Pengganti</h2>
<p>Kunci etika menggunakan AI dalam penelitian adalah memposisikannya sebagai <strong>asisten</strong>, bukan <strong>penulis</strong> skripsimu. Analogi yang tepat: seperti kamu menggunakan kalkulator untuk matematika — kalkulator membantu komputasi, tapi kamu tetap yang memahami konsepnya.</p>

<h2>5 Cara Pemanfaatan AI yang Etis untuk Skripsi</h2>

<h3>1. Brainstorming Judul Penelitian</h3>
<p>AI sangat unggul dalam menghasilkan banyak variasi ide dalam waktu singkat. Kamu bisa memberikan topik umummu dan meminta AI untuk menghasilkan berbagai opsi judul dari sudut pandang yang berbeda — lalu <strong>kamu</strong> yang menyeleksi dan menyempurnakannya.</p>

<h3>2. Validasi Akademik Awal</h3>
<p>Sebelum ke dosen, gunakan AI untuk mengecek apakah judulmu sudah memiliki unsur kebaruan, urgensi, dan kelayakan. Ini bisa menghemat waktu bimbingan yang berharga.</p>

<h3>3. Menyusun Kerangka Penelitian</h3>
<p>AI dapat membantu menyusun alur logis dari Bab 1 hingga Bab 5 — termasuk sub-bab apa saja yang perlu ada dan urutan penyajiannya. Tapi ingat, kontennya tetap harus kamu tulis sendiri.</p>

<h3>4. Parafrase dan Perbaikan Bahasa</h3>
<p>Menggunakan AI untuk memperbaiki tata bahasa, menjernihkan kalimat yang ambigu, atau memparafrase sumber — selama kamu tetap mencantumkan referensi aslinya — adalah praktik yang umumnya diterima.</p>

<h3>5. Analisis Data Awal</h3>
<p>Untuk skripsi kuantitatif, beberapa tool AI kini bisa membantu interpretasi output SPSS atau Python — menjelaskan apa arti sebuah nilai p-value dalam bahasa yang mudah dipahami.</p>

<h2>Garis Merah yang Tidak Boleh Dilanggar</h2>
<ul>
  <li>❌ Menyalin mentah output AI tanpa modifikasi sebagai karya akademik</li>
  <li>❌ Menggunakan AI untuk membuat data penelitian palsu</li>
  <li>❌ Menyembunyikan penggunaan AI dari dosen penguji jika kampus mengharuskan disclosure</li>
</ul>

<h2>Dosbing.ai: AI yang Dirancang Khusus untuk Mahasiswa Indonesia</h2>
<p>Inilah yang membedakan Dosbing.ai dari AI generik: sistem kami dibangun dengan memahami konteks akademik Indonesia. Database kampus dari PDDikti, format kerangka yang sesuai pedoman lokal, dan analisis judul dengan 4 pilar akademik yang relevan — bukan sekadar terjemahan tool barat.</p>`,
    },
    {
        id: 'post-4',
        title: 'Metode Kuantitatif vs Kualitatif: Mana yang Tepat untuk Skripsimu?',
        slug: 'metode-kuantitatif-vs-kualitatif-untuk-skripsi',
        excerpt: 'Salah memilih metode penelitian bisa berakibat fatal. Pelajari perbedaan mendasar, kelebihan, kekurangan, dan kriteria pemilihan metode yang tepat untuk topik penelitianmu.',
        coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
        categoryId: 'cat-2',
        tagIds: ['tag-5', 'tag-6', 'tag-1'],
        author: { name: 'Tim Dosbing.ai', avatar: 'TD', role: 'Academic Content Team' },
        status: 'published',
        publishedAt: '2026-02-12T07:00:00Z',
        metaTitle: 'Metode Kuantitatif vs Kualitatif Skripsi | Dosbing.ai',
        metaDescription: 'Panduan lengkap memilih metode penelitian yang tepat untuk skripsimu. Perbandingan kuantitatif dan kualitatif beserta contoh penerapannya.',
        readingTime: 9,
        content: `<h2>Pertanyaan yang Paling Sering Bikin Mahasiswa Pusing</h2>
<p>Setelah judul disetujui, pertanyaan berikutnya yang paling sering membuat mahasiswa kebingungan adalah: <em>"Skripsi saya pakai metode apa?"</em> Pilihan metode yang salah bukan hanya membuat penelitianmu tidak valid — tapi juga bisa membuat sidangmu berantakan.</p>

<h2>Perbedaan Mendasar</h2>
<p>Secara sederhana, berikut perbedaan keduanya:</p>
<ul>
  <li><strong>Kuantitatif:</strong> Menjawab pertanyaan "Seberapa besar?" atau "Apakah ada hubungan?" menggunakan angka dan statistik.</li>
  <li><strong>Kualitatif:</strong> Menjawab pertanyaan "Mengapa?" atau "Bagaimana?" menggunakan narasi, wawancara, dan observasi mendalam.</li>
</ul>

<h2>Kapan Menggunakan Kuantitatif?</h2>
<ul>
  <li>Ketika kamu ingin mengukur hubungan atau pengaruh antar variabel</li>
  <li>Ketika populasimu cukup besar dan representif (bisa disurvei)</li>
  <li>Ketika sudah ada teori/hipotesis yang ingin kamu uji</li>
  <li>Ketika hasil penelitian perlu digeneralisasi ke populasi yang lebih luas</li>
</ul>
<p><strong>Contoh:</strong> "Pengaruh Disiplin Kerja dan Motivasi terhadap Kinerja Karyawan PT. XYZ."</p>

<h2>Kapan Menggunakan Kualitatif?</h2>
<ul>
  <li>Ketika kamu ingin memahami pengalaman, perspektif, atau makna di balik suatu fenomena</li>
  <li>Ketika topikmu masih baru dan belum banyak diteliti (eksploratif)</li>
  <li>Ketika datamu sulit dikuantifikasi</li>
  <li>Ketika kamu ingin memahami konteks secara mendalam, bukan hanya permukaannya</li>
</ul>
<p><strong>Contoh:</strong> "Pengalaman Mahasiswa Difabel dalam Mengakses Fasilitas Kampus di UGM."</p>

<h2>Mixed Method: Pilihan Ketiga</h2>
<p>Ada juga pilihan ketiga yang semakin populer: <strong>Mixed Method</strong>, yaitu menggabungkan keduanya. Biasanya, data kuantitatif digunakan untuk mengonfirmasi temuan kualitatif, atau sebaliknya. Namun, metode ini lebih kompleks dan sering tidak disarankan untuk mahasiswa S1 yang waktunya terbatas.</p>

<h2>Panduan Cepat Memilih</h2>
<p>Tanyakan dirimu ini:</p>
<ul>
  <li>Apakah rumusan masalahku menggunakan kata "seberapa besar" atau "apakah berpengaruh"? → <strong>Kuantitatif</strong></li>
  <li>Apakah rumusan masalahku menggunakan kata "bagaimana" atau "mengapa"? → <strong>Kualitatif</strong></li>
  <li>Apakah bidang studiku (manajemen, psikologi, ekonomi) lebih banyak menggunakan statistik? → Pertimbangkan <strong>Kuantitatif</strong></li>
</ul>`,
    },
    {
        id: 'post-5',
        title: 'Cara Menghadapi Dosen Killer Saat Sidang Skripsi: Strategi Jitu Mahasiswa Berpengalaman',
        slug: 'cara-menghadapi-dosen-killer-sidang-skripsi',
        excerpt: 'Dosen penguji yang galak bukan musuhmu — mereka adalah bagian dari proses. Dengan persiapan yang tepat dan mental yang kuat, kamu bisa menghadapi sidang paling berat sekalipun.',
        coverImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
        categoryId: 'cat-3',
        tagIds: ['tag-7', 'tag-11', 'tag-8'],
        author: { name: 'Tim Dosbing.ai', avatar: 'TD', role: 'Academic Content Team' },
        status: 'published',
        publishedAt: '2026-02-10T07:00:00Z',
        metaTitle: 'Tips Menghadapi Sidang Skripsi Dosen Killer | Dosbing.ai',
        metaDescription: 'Strategi dan tips konkret untuk menghadapi dosen penguji yang galak saat sidang skripsi. Siap mental dan matang persiapan!',
        readingTime: 6,
        content: `<h2>Sidang Skripsi: Momen Paling Ditakuti di Kampus</h2>
<p>Sidang skripsi adalah puncak dari perjalanan panjangmu. Sayangnya, banyak mahasiswa yang sudah mengerjakan skripsi dengan baik, tapi justru gagal di sidang karena tidak siap menghadapi pertanyaan tajam dari dosen penguji.</p>

<h2>Pahami Dulu: Apa Tujuan Pertanyaan Dosen Killer?</h2>
<p>Dosen penguji yang terkesan "killer" bukan sedang menyiksamu. Mereka sedang memverifikasi bahwa kamu benar-benar memahami penelitianmu secara mendalam — bukan hanya copy-paste atau dibuatkan orang lain. Jadi, jawaban terbaik adalah <strong>kejujuran yang dilandasi pemahaman mendalam</strong>.</p>

<h2>5 Pertanyaan Sidang Paling Sering dan Cara Menjawabnya</h2>

<h3>1. "Kenapa kamu memilih topik ini?"</h3>
<p><strong>Jawaban yang buruk:</strong> "Karena mudah dan banyak referensinya."</p>
<p><strong>Jawaban yang baik:</strong> Hubungkan dengan urgensi masalah nyata. Ceritakan pengalaman atau fenomena yang kamu amati yang membuatmu tertarik pada topik ini.</p>

<h3>2. "Apa keterbatasan penelitianmu?"</h3>
<p>Ini bukan jebakan! Dosen ingin tahu apakah kamu self-aware. Jawab dengan jujur: scope yang terbatas, jumlah sampel, metode pengukuran yang bisa ditingkatkan — dan sarankan untuk penelitian berikutnya.</p>

<h3>3. "Mengapa kamu tidak menggunakan metode X?"</h3>
<p>Jelaskan alasan akademis yang kuat mengapa metode yang kamu pilih lebih tepat untuk menjawab rumusan masalahmu. Ini tentang justifikasi metodologis.</p>

<h3>4. "Jelaskan temuan utama penelitianmu!"</h3>
<p>Ini adalah pertanyaan fundamental. Jika kamu tidak bisa menjelaskan temuanmu dalam 2-3 kalimat sederhana, kamu belum cukup siap.</p>

<h3>5. "Kalau penelitian ini diulang, apa yang akan kamu ubah?"</h3>
<p>Pertanyaan reflektif ini menunjukkan apakah kamu bisa belajar dari pengalamanmu sendiri. Jawab dengan jujur dan substantif.</p>

<h2>Persiapan yang Tidak Boleh Dilewatkan</h2>
<ul>
  <li>Baca ulang skripsimu dari halaman pertama hingga terakhir — minimal 3 kali.</li>
  <li>Latihan presentasi di depan teman, anggota keluarga, atau cermin.</li>
  <li>Siapkan jawaban untuk pertanyaan-pertanyaan yang paling kamu takutkan.</li>
  <li>Tidur cukup minimal 2 malam sebelum sidang.</li>
  <li>Berpakaian rapi dan profesional — kesan pertama penting.</li>
</ul>`,
    },
    {
        id: 'post-6',
        title: 'Literature Review yang Efektif: Panduan Menemukan, Membaca, dan Mensintesis Jurnal Ilmiah',
        slug: 'panduan-literature-review-efektif',
        excerpt: 'Literature review bukan hanya daftar jurnal yang kamu baca. Ini adalah argumen ilmiah yang membangun fondasi penelitianmu. Pelajari teknik yang digunakan peneliti berpengalaman.',
        coverImage: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80',
        categoryId: 'cat-2',
        tagIds: ['tag-12', 'tag-1', 'tag-2'],
        author: { name: 'Tim Dosbing.ai', avatar: 'TD', role: 'Academic Content Team' },
        status: 'published',
        publishedAt: '2026-02-08T07:00:00Z',
        metaTitle: 'Panduan Literature Review Efektif untuk Skripsi | Dosbing.ai',
        metaDescription: 'Teknik menemukan, membaca, dan mensintesis jurnal ilmiah untuk literature review skripsi yang kuat dan sistematis.',
        readingTime: 11,
        content: `<h2>Literature Review: Lebih dari Sekadar "Daftar Bacaan"</h2>
<p>Kesalahan terbesar mahasiswa dalam menulis literature review adalah menganggapnya sebagai rangkuman jurnal satu per satu. Padahal, literature review yang baik adalah seperti membangun sebuah <strong>argumen</strong> — kamu sedang menunjukkan kepada pembaca bagaimana penelitian-penelitian sebelumnya saling berkaitan dan mengapa masih ada celah yang perlu diisi oleh penelitianmu.</p>

<h2>Langkah 1: Tentukan Keywords dengan Tepat</h2>
<p>Sebelum mencari jurnal, tentukan dulu kata kunci penelitianmu dengan cermat. Gunakan kombinasi dari:</p>
<ul>
  <li>Variabel utama penelitianmu</li>
  <li>Populasi / konteks penelitian</li>
  <li>Metode yang digunakan</li>
</ul>
<p>Contoh: untuk judul tentang pengaruh media sosial terhadap kecemasan mahasiswa, keywords bisa berupa: <em>"social media anxiety students"</em>, <em>"Instagram mental health"</em>, <em>"academic anxiety undergraduate"</em>.</p>

<h2>Langkah 2: Cari di Database Jurnal Terpercaya</h2>
<p>Jangan hanya mengandalkan Google. Gunakan database berikut:</p>
<ul>
  <li><strong>Google Scholar</strong> — paling mudah diakses, gratis</li>
  <li><strong>DOAJ</strong> — jurnal open access berkualitas</li>
  <li><strong>Sinta Ristek</strong> — khusus jurnal Indonesia terindeks</li>
  <li><strong>Scopus / Web of Science</strong> — jika kampusmu memiliki akses</li>
</ul>

<h2>Langkah 3: Baca dengan Strategis (Jangan Baca Semua!)</h2>
<p>Membaca semua jurnal dari halaman pertama hingga terakhir adalah tidak efisien. Gunakan strategi ini:</p>
<ul>
  <li>Baca <strong>abstrak</strong> dulu — apakah relevan?</li>
  <li>Jika ya, baca <strong>hasil dan kesimpulan</strong></li>
  <li>Jika masih relevan, baca <strong>metode</strong></li>
  <li>Baru baca <strong>keseluruhan</strong> jika jurnal sangat penting untuk penelitianmu</li>
</ul>

<h2>Langkah 4: Buat Matriks Sintesis</h2>
<p>Buat tabel sederhana dengan kolom: Penulis & Tahun | Topik | Metode | Temuan Utama | Relevansi dengan Penelitianmu. Ini akan sangat membantu saat menulis narasi literature review.</p>

<h2>Langkah 5: Tulis secara Tematik, Bukan Kronologis</h2>
<p>Hindari pola: <em>"Penelitian A menemukan X. Penelitian B menemukan Y. Penelitian C menemukan Z."</em> Ini membosankan dan tidak menunjukkan kemampuan sintetismu.</p>
<p>Cara yang lebih baik: kelompokkan berdasarkan tema atau argumen. Misalnya: <em>"Sebagian besar penelitian terdahulu (A, B, C) menyimpulkan bahwa X. Namun, penelitian D dan E menunjukkan bahwa dalam konteks Y, hasilnya berbeda karena Z."</em></p>`,
    },
    {
        id: 'post-7',
        title: 'Rahasia Work-Life-Thesis Balance: Cara Mahasiswa Akhir Tetap Produktif Tanpa Burnout',
        slug: 'work-life-thesis-balance-mahasiswa-akhir',
        excerpt: 'Kuliah, skripsi, magang, dan kehidupan sosial — bagaimana menyeimbangkan semuanya tanpa jatuh sakit? Berikut strategi dari mahasiswa yang sudah melewatinya.',
        coverImage: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80',
        categoryId: 'cat-3',
        tagIds: ['tag-10', 'tag-11', 'tag-8'],
        author: { name: 'Tim Dosbing.ai', avatar: 'TD', role: 'Academic Content Team' },
        status: 'published',
        publishedAt: '2026-02-05T07:00:00Z',
        metaTitle: 'Work-Life-Thesis Balance untuk Mahasiswa Akhir | Dosbing.ai',
        metaDescription: 'Strategi menjaga keseimbangan kuliah, skripsi, dan kehidupan pribadi tanpa burnout. Tips dari mahasiswa yang sudah berhasil.',
        readingTime: 7,
        content: `<h2>Kenyataan Pahit Mahasiswa Semester Akhir</h2>
<p>Semester akhir adalah periode yang paling berat: skripsi belum selesai, beberapa matkul masih ada, mungkin sedang magang atau kerja paruh waktu, ditambah tekanan dari orang tua yang terus bertanya "kapan wisuda?"</p>
<p>Burnout di semester akhir adalah nyata — dan bisa sangat berbahaya untuk kesehatan mentalmu. Tapi dengan strategi yang tepat, kamu bisa melewatinya.</p>

<h2>Prinsip Dasar: Energi, Bukan Waktu</h2>
<p>Kesalahan terbesar manajemen waktu adalah berfokus pada <em>jumlah jam</em>, bukan pada <em>kualitas energi</em>. Duduk 8 jam di depan laptop tapi setengahnya scrolling media sosial jauh lebih buruk daripada fokus total selama 3 jam.</p>

<h2>Sistem yang Bisa Kamu Coba</h2>

<h3>1. Time Blocking</h3>
<p>Bagi harimu ke dalam blok-blok waktu dengan tema tertentu. Contoh:</p>
<ul>
  <li>07:00–09:00: Skripsi (nulis/revisi)</li>
  <li>09:00–12:00: Kuliah/Magang</li>
  <li>13:00–15:00: Skripsi (riset)</li>
  <li>15:00–17:00: Tugas kuliah</li>
  <li>19:00–22:00: Waktu pribadi</li>
</ul>

<h3>2. Minimum Daily Quota untuk Skripsi</h3>
<p>Tetapkan target minimum yang realistis setiap hari untuk skripsi — misalnya minimal 200 kata atau 1 jam. Ini menjaga momentum tanpa membuatmu kelelahan.</p>

<h3>3. Weekly Review</h3>
<p>Setiap akhir minggu (Minggu malam), evaluasi: Apa yang berhasil diselesaikan? Apa yang tertunda? Apa yang perlu disesuaikan untuk minggu depan?</p>

<h2>Menjaga Kesehatan Mental selama Skripsi</h2>
<ul>
  <li><strong>Selebrasi progres kecil:</strong> Selesai satu sub-bab? Rayakan! Apresiasi diri sendiri penting untuk motivasi jangka panjang.</li>
  <li><strong>Jaga koneksi sosial:</strong> Jangan isolasi diri. Teman dan keluarga adalah support system-mu.</li>
  <li><strong>Olahraga minimal 3x seminggu:</strong> Bukan hanya untuk fisik, tapi olahraga terbukti meningkatkan fungsi kognitif dan mengurangi stres.</li>
  <li><strong>Berani minta tolong:</strong> Jika mandek, diskusikan dengan dosen, teman, atau manfaatkan tools seperti Dosbing.ai.</li>
</ul>`,
    },
    {
        id: 'post-8',
        title: 'Persiapan Karir Setelah Lulus: Dari Wisuda ke Dunia Profesional dalam 6 Bulan',
        slug: 'persiapan-karir-setelah-lulus-wisuda',
        excerpt: 'Banyak fresh graduate yang bingung mau mulai dari mana setelah lulus. Panduan lengkap mempersiapkan CV, portofolio, dan strategi masuk ke dunia kerja yang kompetitif.',
        coverImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80',
        categoryId: 'cat-5',
        tagIds: ['tag-11', 'tag-10'],
        author: { name: 'Tim Dosbing.ai', avatar: 'TD', role: 'Academic Content Team' },
        status: 'draft',
        publishedAt: '2026-02-22T07:00:00Z',
        metaTitle: 'Persiapan Karir Fresh Graduate | Dosbing.ai',
        metaDescription: 'Panduan lengkap mempersiapkan diri masuk dunia kerja setelah wisuda. CV, portofolio, dan strategi networking untuk fresh graduate.',
        readingTime: 9,
        content: `<h2>Selamat, Kamu Wisuda! Sekarang Apa?</h2>
<p>Momen wisuda adalah salah satu yang paling membahagiakan sekaligus paling menakutkan dalam hidup. Setelah bertahun-tahun di bangku kuliah, tiba-tiba kamu harus menghadapi dunia yang sangat berbeda: dunia kerja.</p>

<h2>6 Bulan Pertama adalah Penentu</h2>
<p>Penelitian menunjukkan bahwa 6 bulan pertama setelah lulus adalah periode krusial. Mereka yang aktif mempersiapkan diri di periode ini cenderung mendapatkan pekerjaan pertama yang lebih baik dan lebih cepat.</p>

<h2>Checklist Persiapan Fresh Graduate</h2>
<h3>Bulan 1-2: Fondasi</h3>
<ul>
  <li>Update CV dengan pengalaman terbaru dan foto profesional</li>
  <li>Buat/update profil LinkedIn yang menarik</li>
  <li>Identifikasi 3-5 bidang karir yang ingin kamu masuki</li>
  <li>Pelajari skill yang paling banyak diminta di bidang tersebut</li>
</ul>

<h3>Bulan 3-4: Eksekusi</h3>
<ul>
  <li>Mulai melamar secara aktif (target: 5-10 lamaran per minggu)</li>
  <li>Ikuti komunitas atau mentoring di bidang yang kamu minati</li>
  <li>Ambil sertifikasi online yang relevan</li>
  <li>Bangun portofolio project nyata</li>
</ul>

<h3>Bulan 5-6: Konversi</h3>
<ul>
  <li>Follow up lamaran yang sudah masuk</li>
  <li>Minta feedback dari setiap interview</li>
  <li>Evaluate dan sesuaikan strategi</li>
  <li>Pertimbangkan magang/freelance sambil menunggu posisi ideal</li>
</ul>`,
    },
];
