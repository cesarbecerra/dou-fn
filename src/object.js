import reduce from './reduce'

export default i => reduce((o, [k, v]) => ((o[k] = v), o), {}, i)
