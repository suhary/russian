import { makeTrainingParonymExplaining } from '@/trainer/factories';

export default {
  makeAsyncTrainingFactories() {
    return {
      'ege05-all': async () => makeTrainingParonymExplaining(
        'ЕГЭ. Задание 5. Все части речи',
        'ege05__all',
      ),

      'ege05-verbs': async () => makeTrainingParonymExplaining(
        'ЕГЭ. Задание 5. Все глаголы',
        'ege05__verbs',
      ),

      'ege05-nouns': async () => makeTrainingParonymExplaining(
        'ЕГЭ. Задание 5. Все существительные',
        'ege05__nouns',
      ),
      'ege05-nouns-ost': async () => makeTrainingParonymExplaining(
        'ЕГЭ. Задание 5. Существительные на -ОСТЬ',
        'ege05__nouns_ost',
      ),
      'ege05-nouns-prefix': async () => makeTrainingParonymExplaining(
        'ЕГЭ. Задание 5. Существительные с приставками',
        'ege05__nouns_prefix',
      ),
      'ege05-nouns-other': async () => makeTrainingParonymExplaining(
        'ЕГЭ. Задание 5. Другие существительные',
        'ege05__nouns_other',
      ),

      'ege05-adjs': async () => makeTrainingParonymExplaining(
        'ЕГЭ. Задание 5. Все прилагательные',
        'ege05__adjs',
      ),
      'ege05-adjs-ist': async () => makeTrainingParonymExplaining(
        'ЕГЭ. Задание 5. Прилагательные с суффиксом -ИСТ-',
        'ege05__adjs_ist',
      ),
      'ege05-adjs-verbal': async () => makeTrainingParonymExplaining(
        'ЕГЭ. Задание 5. Причастия и отглагольные прилагательные',
        'ege05__adjs_verbal',
      ),
      'ege05-adjs-sk-eln': async () => makeTrainingParonymExplaining(
        'ЕГЭ. Задание 5. Прилагательные с суффиксами -ЕЛЬСК- и -ЕЛЬН-',
        'ege05__adjs_sk_eln',
      ),
      'ege05-adjs-sk-ichn': async () => makeTrainingParonymExplaining(
        'ЕГЭ. Задание 5. Прилагательные с суффиксами -ИЧЕСК- и -ИЧН',
        'ege05__adjs_sk_ichn',
      ),
      'ege05-adjs-sk-mixed': async () => makeTrainingParonymExplaining(
        'ЕГЭ. Задание 5. Другие прилагательные с суффиксами -СК- и -Н-',
        'ege05__adjs_sk_mixed',
      ),
      'ege05-adjs-other-eln': async () => makeTrainingParonymExplaining(
        'ЕГЭ. Задание 5. Другие прилагательные с суффиксом -ЕЛЬН-',
        'ege05__adjs_other_eln',
      ),
      'ege05-adjs-other-liv': async () => makeTrainingParonymExplaining(
        'ЕГЭ. Задание 5. Другие прилагательные с суффиксом -ЛИВ-',
        'ege05__adjs_other_liv',
      ),
      'ege05-adjs-other-stvenn': async () => makeTrainingParonymExplaining(
        'ЕГЭ. Задание 5. Другие прилагательные с суффиксом -СТВЕНН-',
        'ege05__adjs_other_stvenn',
      ),
      'ege05-adjs-other-groups': async () => makeTrainingParonymExplaining(
        'ЕГЭ. Задание 5. Прилагательные с несколькими паронимами',
        'ege05__adjs_other_groups',
      ),
      'ege05-adjs-other-mixed': async () => makeTrainingParonymExplaining(
        'ЕГЭ. Задание 5. Другие прилагательные',
        'ege05__adjs_other_mixed',
      ),
    };
  },
};
