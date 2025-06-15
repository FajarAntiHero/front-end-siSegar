import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Pastikan GSAP dan ScrollTrigger sudah terdaftar di root aplikasi (misal App.js)

/**
 * Custom hook untuk menerapkan animasi GSAP on-scroll.
 * @param {object} animationProps Properti animasi GSAP (misal { y: 100, opacity: 0 })
 * @param {object} scrollTriggerProps Properti ScrollTrigger (misal { start: 'top 80%', toggleActions: 'play none none none' })
 * @returns {React.MutableRefObject} Ref yang perlu dilampirkan ke elemen DOM.
 */
const useScrollAnimation = ({
  fromProps = { y: 100, opacity: 0 },
  toProps = { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
  scrollTriggerProps = {
    start: 'top 80%', // Animasi mulai saat 80% bagian atas elemen terlihat
    toggleActions: 'play none none none', // Mainkan saat masuk viewport, jangan ulangi/balik
    markers: true, // Hapus atau jadikan false saat produksi!
  }

  } = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        fromProps,
        {
          ...toProps, // Gabungkan properti 'to' yang diberikan dengan default
          scrollTrigger: {
            trigger: elementRef.current,
            // id: triggerId, // Berikan ID unik untuk trigger ini
            ...scrollTriggerProps, // Gabungkan properti ScrollTrigger yang diberikan dengan default
          },
        }
      );
    }

    // Cleanup function: kill the ScrollTrigger instance when component unmounts
    return () => {
      if (elementRef.current) {
        const triggers = ScrollTrigger.getById(triggerId); // Ambil trigger berdasarkan ID
        if (triggers) {
          triggers.kill();
        }
      }
    };
  }, [fromProps, toProps, scrollTriggerProps]); // Dependensi diperbarui

  return elementRef;
};

export default useScrollAnimation;