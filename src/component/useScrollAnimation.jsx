import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
    start: 'top 60%', // Animasi mulai saat 80% bagian atas elemen terlihat (bukan 50% seperti komentar sebelumnya)
    toggleActions: 'play none none none', // Mainkan saat masuk viewport, jangan ulangi/balik
    // markers: true, // Hapus atau jadikan false saat produksi!
  },
} = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    // Pastikan ScrollTrigger sudah terdaftar jika belum (praktik yang baik jika hook ini digunakan di berbagai tempat)
    // Walaupun idealnya didaftarkan sekali di root.
    if (!gsap.isTweening(elementRef.current) && !ScrollTrigger.getById('some-id-to-check')) {
        gsap.registerPlugin(ScrollTrigger);
    }


    if (elementRef.current) {
      // Penting: Gunakan variabel untuk ScrollTrigger instance agar bisa di-kill
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: elementRef.current, // Ini sudah benar
          once: true,
          // ID untuk ScrollTrigger harus unik. Jika Anda tidak menyediakan secara eksternal,
          // Anda bisa mengandalkan instance ScrollTrigger itu sendiri untuk di-kill.
          // Jika perlu ID, Anda bisa tambahkan argumen `id` ke hook ini.
          // id: 'unique-id-for-this-trigger', // Contoh, jika perlu
          ...scrollTriggerProps, // Gabungkan properti ScrollTrigger yang diberikan dengan default
        },
      });

      tl.fromTo(elementRef.current, fromProps, toProps);

      // Cleanup function: kill the ScrollTrigger instance when component unmounts
      // Penting: Menggunakan timeline (tl) memudahkan cleanup.
      // Jika Anda hanya membuat tween langsung (gsap.fromTo), Anda bisa menggunakan .scrollTrigger.kill()
      return () => {
        if (tl.scrollTrigger) { // Pastikan ScrollTrigger ada pada timeline
          tl.scrollTrigger.kill();
        }
      };
    }
  }, [fromProps, toProps, scrollTriggerProps]); // Dependensi sudah benar

  return elementRef;
};

export default useScrollAnimation;