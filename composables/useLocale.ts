import enData from '@/data/en.json'
import esData from '@/data/es.json'

type Locale = 'en' | 'es'

const locales: Record<Locale, typeof enData> = {
  en: enData,
  es: esData,
}

export function useLocale() {
  const currentLocale = useState<Locale>('locale', () => 'en')
  const data = computed(() => locales[currentLocale.value])

  function setLocale(locale: Locale) {
    currentLocale.value = locale
  }

  function toggleLocale() {
    currentLocale.value = currentLocale.value === 'en' ? 'es' : 'en'
  }

  return {
    locale: currentLocale,
    data,
    setLocale,
    toggleLocale,
  }
}
