import React, { useState } from "react";
import {
  FaInstagram, FaFacebook, FaTiktok, FaGamepad, FaMapMarkerAlt, FaPhoneAlt, FaSkull, FaUserFriends, FaRegCopy,
  FaCheck, FaExclamationTriangle, FaCameraRetro
} from "react-icons/fa";
import { MdFingerprint, MdVerifiedUser } from "react-icons/md";
import { motion } from "framer-motion";

// --- DATA DUMMY (Ganti bagian ini dengan data JSON Anda nanti) ---
const TARGET_DATA = {
  name: "Kinosita Nurfaridzi", // Ganti Nama
  title: "Professional Ghosting Expert",
  location: "Perum Bumi Cimanganten Asri, Langensari, Kec. Tarogong Kaler, Kabupaten Garut, Jawa Barat 44151", // Ganti Alamat
  mapLink: "https://maps.app.goo.gl/zTbWDFuJCmwZ11Fj8",
  phones: ["0895-8104-15000", "0882-1891-0011"],
  socials: [
    { platform: "Instagram", handle: "kinostanurf", link: "https://www.instagram.com/kinostanurf", icon: <FaInstagram /> },
    { platform: "Instagram", handle: "kinos_nfrdz", link: "https://www.instagram.com/kinos_nfrdz", icon: <FaInstagram /> },
    { platform: "Instagram", handle: "farizikinosta", link: "https://www.instagram.com/farizikinosta", icon: <FaInstagram /> },
    { platform: "Instagram", handle: "knurfarizi", link: "https://www.instagram.com/knurfarizi", icon: <FaInstagram /> },
    { platform: "TikTok", handle: "kinos.cukurukuk", link: "https://www.tiktok.com/@kinos.cukurukuk", icon: <FaTiktok /> },
    { platform: "TikTok", handle: "kinostanurfaridzi", link: "https://www.tiktok.com/@kinostanurfaridzi", icon: <FaTiktok /> },
    { platform: "Facebook", handle: "Kinosta Nurfarizi", link: "https://www.facebook.com/kinosta.nurfarizi.9", icon: <FaFacebook /> },
    { platform: "Roblox", handle: "kinostapro", link: "https://www.roblox.com/id/users/1952322114/profile", icon: <FaGamepad /> },
  ],
  family: [
    { relation: "Ibu", name: "Ira Kusweti", link: "https://www.facebook.com/ira.kusweti" }, // Ganti Family
    { relation: "Saudara", name: "Muhammad Guntur Adiwiguna", link: "https://www.instagram.com/gunturadiwiguna" },
  ],
  traits: [
    "Kacamata (Untuk melihat peluang nipu lebih jelas)",
    "Postur Tinggi (Biar susah diciduk)",
    "Kulit Putih",
    "Alis Tebal (Setebal muka)",
    "Senyum Lebar (Tanda puas makan duit orang)"
  ],
  gallery: [
    {
      src: "/img/kinosita1.jpg",
      caption: "Muka polos saat meminjam, sangar saat ditagih."
    },
    {
      src: "/img/kinosita2.jpg",
      caption: "Gaya elit hasil uang orang lain."
    },
    {
      src: "/img/kinosita3.jpg",
      caption: "Foto profil WA sebelum diblokir."
    },
    {
      src: "/img/kinosita4.jpg",
      caption: "Senyum lebar tanda kepuasan menipu."
    },
    {
      src: "/img/kinosita5.jpg",
      caption: "Senyum lebar tanda kepuasan menipu."
    },
    {
      src: "/img/kinosita6.jpg",
      caption: "Senyum lebar tanda kepuasan menipu."
    },
    {
      src: "/img/kinosita7.jpg",
      caption: "Senyum lebar tanda kepuasan menipu."
    },
    {
      src: "/img/kinosita8.jpg",
      caption: "Senyum lebar tanda kepuasan menipu."
    },
    {
      src: "/img/kinosita9.jpg",
      caption: "Senyum lebar tanda kepuasan menipu."
    },
    {
      src: "/img/kinosita10.jpg",
      caption: "Senyum lebar tanda kepuasan menipu."
    },
  ]
  // ============================
};



const SectionHeader = ({ title, icon }) => (
  <div className="flex items-center gap-2 mb-4 border-b border-red-900/50 pb-2">
    <span className="text-red-500 text-xl">{icon}</span>
    <h2 className="text-xl font-bold text-red-50 uppercase tracking-wider">{title}</h2>
  </div>
);

function App() {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
  // === TEMPELKAN TEKS MENTAH DI ANTARA TANDA BACKTICK (`) DI BAWAH INI ===
  const reportText = `
1. IDENTITAS UTAMA
Nama: Kinosta Nurfaridzi
Domisili: Perum Bumi Cimanganten Asri, Langensari, Kec. Tarogong Kaler, Kabupaten Garut, Jawa Barat 44151
Link: https://maps.app.goo.gl/zTbWDFuJCmwZ11Fj8

2. KONTAK TELEPON
Nomor HP 1: 0895-8104-15000
Nomor HP 2: 0882-1891-0011

3. JEJAK DIGITAL (MEDIA SOSIAL & GAME)
Instagram:
@kinostanurf (ID: 33022008336)
Link: https://www.instagram.com/kinostanurf
@kinos_nfrdz (ID: 57924321102)
Link: https://www.instagram.com/kinos_nfrdz
@farizikinosta (ID: 8578709233)
Link: https://www.instagram.com/farizikinosta
@knurfarizi (ID: 5939782130)
Link: https://www.instagram.com/knurfarizi

TikTok:
@kinos.cukurukuk (ID: 6901355451944109058)
Link: https://www.tiktok.com/@kinos.cukurukuk
@kinostanurfaridzi (ID: 6812864233513600002)
Link: https://www.tiktok.com/@kinostanurfaridzi

Facebook:
Kinosta Nurfarizi (ID: 100035119982522)
Link: https://www.facebook.com/kinosta.nurfarizi.9

Platform Game (Roblox):
Username: kinostapro
ID: 1952322114

4. KONEKSI / PIHAK TERKAIT
Ira Kusweti (Ibu)
Facebook ID: 100006474333582
Link: https://www.facebook.com/ira.kusweti

Muhammad Guntur Adiwiguna (Saudara Laki-Laki)
Instagram ID: 1646834737
Link: https://www.instagram.com/gunturadiwiguna
Facebook ID: 100000571770706
Link: https://www.facebook.com/mochammad.guntur.3

5. CIRI-CIRI FISIK
Menggunakan kacamata.
Postur tubuh agak tinggi.
Warna kulit putih.
Alis dan kumis tebal.
Memiliki senyum yang lebar.
    `.trim();
  // .trim() digunakan agar spasi kosong di awal/akhir backtick hilang otomatis

  // Copy ke clipboard
  navigator.clipboard.writeText(reportText);

  // Efek visual tombol berubah (Feedback ke user)
  setCopied(true);
  setTimeout(() => setCopied(false), 2000);
};

  return (
    <div className="min-h-screen bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-gray-950 text-gray-300 pb-20">

      {/* WARNING BANNER */}
      <div className="bg-red-600 text-black font-bold text-center py-2 px-4 uppercase tracking-widest animate-pulse flex justify-center items-center gap-2">
        <FaExclamationTriangle /> PUBLIC WARNING: SCAMMER ALERT <FaExclamationTriangle />
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-10">

        {/* HEADER PROFILE */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900/80 backdrop-blur-md border border-red-900/30 rounded-xl overflow-hidden shadow-2xl shadow-red-900/20"
        >
          <div className="md:flex">
            {/* FOTO AREA */}
            <div className="md:w-1/3 bg-gray-800 relative group">
              <img 
                src={TARGET_DATA.profilePic || "/img/kinosita5.jpg"} 
                alt="Target" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-red-600/90 text-white text-center py-1 font-bold">
                WANTED / DICARI
              </div>
            </div>

            {/* IDENTITAS UTAMA */}
            <div className="p-8 md:w-2/3">
              
              {/* === BAGIAN INI DIMODIFIKASI UNTUK TOMBOL COPY === */}
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-4xl font-extrabold text-white mb-1">{TARGET_DATA.name}</h1>
                  <p className="text-red-400 font-mono text-sm tracking-widest mb-4 border border-red-500/30 inline-block px-2 py-1 rounded">
                    {TARGET_DATA.title}
                  </p>
                </div>

                {/* Container Kanan: Icon Verified & Tombol Copy */}
                <div className="flex flex-col items-end gap-3">
                  <MdVerifiedUser className="text-red-600 text-5xl opacity-50" />
                  
                  {/* TOMBOL COPY */}
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-red-500 text-xs text-gray-300 py-1.5 px-3 rounded transition-all active:scale-95"
                    title="Salin semua data teks"
                  >
                    {copied ? (
                      <>
                        <FaCheck className="text-green-500" />
                        <span className="text-green-500 font-bold">Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <FaRegCopy />
                        <span>Salin Data</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
              {/* ================================================ */}

              <div className="space-y-4 mt-4">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="mt-1 text-red-500 shrink-0" />
                  <div>
                    <p className="text-sm text-gray-400">Alamat</p>
                    <p className="text-white font-medium">{TARGET_DATA.location}</p>
                    <a href={TARGET_DATA.mapLink} target="_blank" className="text-xs text-blue-400 hover:underline">Lihat di Google Maps</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaPhoneAlt className="mt-1 text-red-500 shrink-0" />
                  <div>
                    <p className="text-sm text-gray-400">No Telephone</p>
                    {TARGET_DATA.phones.map((phone, idx) => (
                      <p key={idx} className="text-white font-mono bg-gray-800 px-2 py-0.5 rounded mb-1 inline-block mr-2 border border-gray-700">
                        {phone}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* GRID CONTENT */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">

          {/* KOLOM KIRI: JEJAK DIGITAL */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-900/60 border border-gray-800 p-6 rounded-xl"
          >
            <SectionHeader title="Jejak Digital" icon={<MdFingerprint />} />
            <p className="text-sm text-gray-400 mb-4 italic">
              "Suka pamer di sosmed, tapi lupa bayar kewajiban. Berikut adalah panggung sandiwaranya."
            </p>
            <div className="space-y-3">
              {TARGET_DATA.socials.map((sosmed, idx) => (
                <a
                  key={idx}
                  href={sosmed.link}
                  target="_blank"
                  className="flex items-center justify-between p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition group border border-gray-700 hover:border-red-500/50"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl text-gray-400 group-hover:text-white transition">{sosmed.icon}</span>
                    <div>
                      <p className="text-xs text-gray-500 uppercase">{sosmed.platform}</p>
                      <p className="text-white font-medium">{sosmed.handle}</p>
                    </div>
                  </div>
                  <span className="text-xs text-red-400 opacity-0 group-hover:opacity-100 transition">Visit &rarr;</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* KOLOM KANAN: CIRI & KONEKSI */}
          <div className="space-y-6">

            {/* CIRI FISIK */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-900/60 border border-gray-800 p-6 rounded-xl"
            >
              <SectionHeader title="Spesifikasi Unit" icon={<FaSkull />} />
              <ul className="space-y-2">
                {TARGET_DATA.traits.map((trait, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-red-500 mt-1">➤</span>
                    {trait}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* PIHAK TERKAIT */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-900/60 border border-gray-800 p-6 rounded-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-2 opacity-10 text-red-600 text-6xl">
                <FaUserFriends />
              </div>
              <SectionHeader title="Pihak Terkait" icon={<FaUserFriends />} />
              <p className="text-xs text-gray-500 mb-4">
                Daftar orang yang mungkin mengetahui keberadaan unit ini. Hubungi dengan sopan.
              </p>
              <div className="grid gap-3">
                {TARGET_DATA.family.map((fam, idx) => (
                  <div key={idx} className="bg-gray-800/50 p-3 rounded border-l-2 border-red-600">
                    <p className="text-xs text-red-400 uppercase font-bold">{fam.relation}</p>
                    <a href={fam.link} target="_blank" className="text-white font-medium hover:text-red-400 hover:underline cursor-pointer">
                      {fam.name}
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        {/* ========================================= */}
        {/* *** AREA UNTUK GALLERY SECTION BARU *** */}
        {/* ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-10 bg-gray-900/60 border border-gray-800 p-6 rounded-xl"
        >
          <SectionHeader title="Galeri Bukti Visual" icon={<FaCameraRetro />} />
          <p className="text-sm text-gray-400 mb-6 italic">
            "Kumpulan dokumentasi visual target. Klik atau arahkan kursor untuk melihat detail kepalsuannya."
          </p>

          {/* Grid Gallery */}
          {/* Grid Gallery Tanpa Caption */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {TARGET_DATA.gallery.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }} // Zoom sedikit saat hover
                className="relative group rounded-lg overflow-hidden border border-gray-800 shadow-lg bg-black h-64 cursor-pointer"
              >
                {/* Gambar */}
                <img
                  src={item.src}
                  alt={`Bukti ${idx + 1}`}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                  loading="lazy"
                />

                {/* Stempel Bukti (Tetap ada biar keren) */}
                <div className="absolute top-2 right-2 bg-red-700/80 text-white text-[10px] font-mono px-2 py-0.5 rounded border border-red-500/50 backdrop-blur-sm z-10 opacity-70 group-hover:opacity-100 transition-opacity">
                  EVIDENCE #{idx + 1}
                </div>

                {/* Efek Kilatan Merah Halus saat Hover (Opsional) */}
                <div className="absolute inset-0 bg-red-500/10 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ========================================= */}
        {/* ========================================= */}

        {/* FOOTER */}
        <div className="mt-12 text-center border-t border-gray-800 pt-8 pb-8">
          <p className="text-gray-600 text-sm">
            Website ini dibuat sebagai bentuk sanksi sosial. Data diambil dari sumber terbuka (OSINT).
          </p>
          <p className="text-gray-700 text-xs mt-2">
            Created with Hate & React JS.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;