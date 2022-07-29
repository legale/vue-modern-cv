<template>
  <div class="flex">
    <div class="flex-1 p2 basis-2/12 bg-green-200 rounded-sm">w-1/8
    <RouterLink to="/cv1">Резюме</RouterLink>
    </div>

    <CvTemplate/>

    <div class="flex-1 p-2 basis-8/12 bg-red-200 rounded-sm">
      <CvContentBlock :items="[
            { id: 0, label: 'grade', name: 'grade' },
            { id: 1, label: 'name', name: 'left' },
            { id: 2, label: 'location', name: 'right' },
            { id: 3, label: 'block', placeholder: 'название блока', name: 'block' }
            ]"
                      buttonName="Добавить"
                      @create="createBlock"
      />

      <div v-for="(block, blockIndex) in cv" :key="block.id">
        <h2>{{ block.key }}</h2>
        <ItemList :items="block.val"
                  @remove="(itemIndex)=> removeItem(blockIndex, itemIndex)"
                  @update="(itemV, itemI, inputI)=> updateItem(itemV, blockIndex, itemI, inputI)"
        />
      </div>

    </div>

    <div class="flex-1 p2 basis-2/12 bg-blue-200 rounded-sm">w-2/8</div>
  </div>
</template>

<script>
import CvContentBlock from '@/CvContentBlock.vue';
import ItemList from "@/ItemList";
import CvTemplate from "@/cv/CvTemplate";

export default {
  data() {
    return {
      cv: [
        {
          id: 0,
          key: 'education',
          val: [
            {
              id: 0, grade: '2005, высшее, юрист,',
              left: 'Московский Гуманитарно-экономический институт',
              right: 'Москва, Россия'
            },
            {
              id: 1, grade: '2004, налоги и налогообложение,',
              left: 'Финансовая академия при Правительстве РФ',
              right: 'Москва, Россия',
            },
            {
              id: 2, grade: '2007, конкурсные торги,',
              left: 'Специализированный центр конкурсные торги курсы повышения квалификации',
              right: 'Москва, Россия',
            },
          ],
        },
        {
          id: 1,
          key: 'Professional experience',
          val: [
            {
              id: 0, grade: '2007, конкурсные торги,',
              left: 'Специализированный центр конкурсные торги курсы повышения квалификации',
              right: 'Москва, Россия',
            },
            {
              id: 1,
              right: 'Jan 2014 – Nov 2019 Москва, Россия',
              grade: 'ведущий инспектор,',
              left: 'Счетная палата Российской Федерации Сбор и анализ больших данных (Pandas, Jupiter), подготовка аналитических данных, аудиторская проверка.',
            },
            {
              id: 2,
              right: 'Oct 2012 – Jan 2014 Москва, Россия',
              grade: 'заместитель начальника отдела, ГБУ «Московский аналитический центр»',
              left: 'Разработка и развитие городских информационных систем.',
            },
            {
              id: 3,
              right: 'Mar 2011 – Aug 2012 Москва, Россия',
              grade: 'консультант Контрольного управления, Правительство Москвы',
              left: 'Разработка и внедрение "Электронный бюджет", автоматизированная система управления городскими финансами.',
            },
            {
              id: 4,
              right: 'Aug 2008 – Mar 2011 Москва, Россия',
              grade: 'консультант ДЖКХиБ, Правительство Москвы',
              left: 'Разработка и внедрение АСУ "Объединенные диспетчерские службы" и АСУ "Единый информационно-расчетный центр',
            },
            {
              id: 5,
              right: 'Oct 2007 – Aug 2008 Москва, Россия',
              grade: 'юрисконсульт, телеканал «СПАС»',
              left: 'Представительство в судах',
            },
          ],
        },
      ],
    };
  },
  methods: {
    createBlock(form){
      console.log(this.cv);
      let block = this.cv.find(obj => obj.key === form.block);
      if(!block){
        this.cv.push({id: Date.now(), key: form.block, val: []});
        block = this.cv[this.cv.length - 1]; //get inserted block

      }
      block.val.push({
        id: Date.now(),
        right: form.right,
        grade: form.grade,
        left: form.left,
      });

    },
    removeItem(blockIndex, itemIndex){
      // console.log(this.$options.__file, itemIndex, blockIndex);
      this.cv[blockIndex].val.splice(itemIndex, 1);
    },
    updateItem(itemValue, blockIndex, itemIndex, inputIndex){
      // console.log(this.$options.__file, itemIndex, blockIndex);
      this.cv[blockIndex].val[itemIndex][inputIndex] = itemValue;
    },
  },
  // emits: ['create', 'remove'],
  components: {CvTemplate, ItemList, CvContentBlock},
};
</script>

<style>
</style>