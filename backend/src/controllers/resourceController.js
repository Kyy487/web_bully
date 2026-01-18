// Support resources and educational content
exports.getResources = async (req, res) => {
  try {
    const resources = {
      support: [
        {
          id: 1,
          title: 'Berbicara dengan Orang Terpercaya',
          description: 'Jangan ragu untuk membagikan cerita Anda kepada orang yang dipercaya seperti orang tua, guru, atau teman dekat.',
          advice: 'Memilih waktu yang tepat dan orang yang tepat adalah kunci. Jelaskan dengan jelas apa yang terjadi.'
        },
        {
          id: 2,
          title: 'Hubungi Pihak Berwenang',
          description: 'Jika bullying sudah parah atau menyentuh unsur pelanggaran hukum, hubungi pihak berwenang setempat.',
          advice: 'Siapkan bukti atau catatan kejadian. Ini penting untuk membuat laporan yang efektif.'
        },
        {
          id: 3,
          title: 'Cari Bantuan Profesional',
          description: 'Konseling atau terapi dapat membantu mengatasi trauma dan membangun resiliensi.',
          advice: 'Tidak ada malu untuk mencari bantuan profesional. Ini adalah langkah positif untuk kesehatan mental Anda.'
        }
      ],
      coping: [
        {
          id: 1,
          title: 'Jaga Kesehatan Mental',
          tips: [
            'Lakukan aktivitas yang menyenangkan',
            'Olahraga dan bergerak teratur',
            'Istirahat yang cukup',
            'Hindari isolasi diri'
          ]
        },
        {
          id: 2,
          title: 'Bangun Jaringan Dukungan',
          tips: [
            'Tingkatkan hubungan dengan teman-teman baik',
            'Bergabung dengan komunitas atau klub',
            'Cari mentors atau role models',
            'Ikuti grup dukungan'
          ]
        },
        {
          id: 3,
          title: 'Strategi Menghadapi Bullying',
          tips: [
            'Jangan membalas dengan kekerasan',
            'Dokumentasikan kejadian',
            'Hindari situasi yang membuat Anda terancam',
            'Kembangkan kepercayaan diri'
          ]
        }
      ],
      education: [
        {
          id: 1,
          title: 'Memahami Bullying',
          content: 'Bullying adalah perilaku agresif yang berulang dengan ketidakseimbangan kekuatan. Penting untuk memahami bahwa ini bukan kesalahan Anda.'
        },
        {
          id: 2,
          title: 'Dampak Bullying',
          content: 'Bullying dapat berdampak pada kesehatan mental, akademik, dan sosial. Pemahaman ini membantu Anda mencari bantuan dengan cepat.'
        },
        {
          id: 3,
          title: 'Tidak Sendirian',
          content: 'Jutaan orang mengalami bullying. Berbagi cerita Anda dapat memberikan rasa validasi dan membuka jalan menuju penyembuhan.'
        }
      ]
    };

    res.json(resources);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get motivational messages
exports.getMotivationalMessages = async (req, res) => {
  try {
    const messages = [
      'Anda layak mendapatkan kebahagiaan dan keamanan. Jangan biarkan kata-kata mereka mendefinisikan Anda.',
      'Keberanian dimulai dengan langkah kecil. Menceritakan cerita Anda adalah bentuk keberanian yang luar biasa.',
      'Bullying mengatakan banyak hal tentang orang yang melakukannya, bukan tentang Anda.',
      'Masa depan Anda cerah. Hal yang sulit ini akan membuat Anda lebih kuat.',
      'Anda tidak sendirian dalam perjalanan ini. Banyak orang peduli dan ingin membantu.',
      'Meminta bantuan bukan kelemahan, ini adalah kekuatan.',
      'Setiap hari adalah kesempatan baru untuk menjadi versi terbaik dari diri Anda.',
      'Trauma yang Anda alami valid. Perasaan Anda penting.',
      'Anda lebih dari sekadar apa yang terjadi pada Anda.',
      'Perubahan dimulai ketika Anda berani untuk berbicara.'
    ];

    // Return random message
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    res.json({
      message: randomMessage,
      all: messages
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get FAQ
exports.getFAQ = async (req, res) => {
  try {
    const faqs = [
      {
        question: 'Apakah identitas saya akan dirahasiakan?',
        answer: 'Ya, sepenuhnya. Kami tidak menyimpan atau membagikan informasi identitas Anda. Cerita Anda adalah privat dan aman bersama kami.'
      },
      {
        question: 'Apa yang akan terjadi dengan cerita saya?',
        answer: 'Cerita Anda akan disimpan secara aman. Anda dapat melihatnya kapan saja dan bahkan memperbarui status resolusi Anda.'
      },
      {
        question: 'Bagaimana jika saya ingin menghapus cerita saya?',
        answer: 'Hubungi kami melalui formulir kontak dan kami akan mempertimbangkan permintaan Anda.'
      },
      {
        question: 'Apakah website ini menggantikan konseling profesional?',
        answer: 'Tidak. Website ini adalah tempat untuk berbagi dan mendapat dukungan. Untuk masalah serius, kami merekomendasikan konsultasi dengan profesional kesehatan mental.'
      },
      {
        question: 'Bisakah saya membaca cerita orang lain?',
        answer: 'Iya, Anda dapat melihat cerita orang lain (tanpa identitas mereka) untuk merasa lebih terhubung dan memahami bahwa Anda tidak sendirian.'
      }
    ];

    res.json(faqs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
