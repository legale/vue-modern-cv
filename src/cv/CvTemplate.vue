<script>
import HeaderBlock from "@/cv/cvHeaderBlock.vue";
import Cv1_page2 from "@/cv/cv1_page2.vue";
import Cv1_spacer from "@/cv/cv1_spacer.vue";
import CvBlock from "./CvBlock.vue";
import html2pdf from 'html2pdf.js';

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
  components: {
    HeaderBlock,
    Cv1_page2,
    Cv1_spacer,
    CvBlock
  },
  methods: {
    savepdf() {
      console.log(this.$refs.document);
      html2pdf(this.$refs.document, {
        margin: 0,
        filename: 'document.pdf',
        image: {type: 'png', quality: 0.98},
        html2canvas: {dpi: 300, letterRendering: true},
        jsPDF: {unit: 'cm', format: 'A4', orientation: 'portrait'}
      });
    }
  }
}

</script>


<template>
  <div style="z-index: 999; position: absolute" @click="savepdf">
    <button
        class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
    >
      Скачать pdf
    </button>
  </div>


  <div id="modal-root">
    <div role="dialog" aria-modal="true"
         class="Dialog-sc-f1m3vu-0 ksTFqE fixed inset-0 z-10 flex items-start justify-center overflow-y-auto">
      <div aria-hidden="true" class="fixed inset-0 -z-10 bg-black opacity-60" id="modalOverlay"></div>
      <div class="mt-16">
        <div style="width: 952.8px; height: 2770.8px;">
          <div  class="pointer-events-none origin-top-left" >
            <div  class="pointer-events-auto inline-flex">
              <div ref="document" class="C-sc-14k3swz-0 dECIMf">

                <div  font-family="Lora" font-size="3" width="793.7007874" height="1122.519685" format="A4"
                     class="C-sc-1x2zl3s-1 eYccBV resumePage notranslate">
                  <div class="DarkOverlayForBackgroundImage-sc-1x2zl3s-0 jzpuAm">
                    <HeaderBlock/>
                    <div class="Border-sc-1ty42q1-0 fhPtSW">
                      <div class="C-sc-1ty42q1-1 iGyIlC resumeInnerPage">
                        <Cv1_spacer/>
                        <CvBlock :blocks="cv"/>

                        <div font-size="3" color="#333333" class="C-sc-j15k4x-0 fSFcfU"><span
                            class="NameElement-sc-j15k4x-2 bXKacC">Исаев Руслан</span><span
                            class="PagesElement-sc-j15k4x-3 fvUYNH">1 / 2</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <Cv1_page2/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>


<style>

.pointer-events-none {
  pointer-events: none;
}

.pointer-events-auto {
  pointer-events: auto;
}

.fixed {
  position: fixed;
}

.inset-0 {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.right-4 {
  right: 1rem;
}

.bottom-4 {
  bottom: 1rem;
}

.z-10 {
  z-index: 10;
}

.-z-10 {
  z-index: -10;
}

.mt-16 {
  margin-top: 4rem;
}

.flex {
  display: flex;
}

.inline-flex {
  display: inline-flex;
}

.h-12 {
  height: 3rem;
}

.min-h-\[30px\] {
  min-height: 30px;
}

.w-12 {
  width: 3rem;
}

.w-7 {
  width: 1.75rem;
}

.min-w-\[30px\] {
  min-width: 30px;
}

.origin-top-left {
  -webkit-transform-origin: top left;
  transform-origin: top left;
}

.cursor-pointer {
  cursor: pointer;
}

.touch-manipulation {
  touch-action: manipulation;
}

.appearance-none {
  -webkit-appearance: none;
  appearance: none;
}

.items-start {
  align-items: flex-start;
}

.items-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.overflow-y-auto {
  overflow-y: auto;
}

.rounded-full {
  border-radius: 9999px;
}

.border-none {
  border-style: none;
}

.bg-black {
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0/var(--tw-bg-opacity));
}

.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}

.from-brandPink {
  --tw-gradient-from: #EC008C;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(236 0 140 / 0));
}

.to-brandRed {
  --tw-gradient-to: #FC6767;
}

.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255/var(--tw-text-opacity));
}

.opacity-60 {
  opacity: .6;
}

.outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.transition-transform {
  transition-property: -webkit-transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  transition-duration: .15s;
}

.duration-200 {
  transition-duration: .2s;
}

html ::-webkit-scrollbar {
  display: none;
}


.hover\:scale-\[1\.03\]:hover {
  --tw-scale-x: 1.03;
  --tw-scale-y: 1.03;
  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

@media (min-width: 768px) {
  .md\:h-14 {
    height: 3.5rem;
  }

  .md\:w-14 {
    width: 3.5rem;
  }

  .md\:w-9 {
    width: 2.25rem;
  }
}

/*! CSS Used from: Embedded */
.ksTFqE #modalOverlay + * {
  z-index: 20;
}

.hAYCYv {
  width: 100%;
  color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 0.454em;
}

.klqRhP {
  font-weight: bold;
  font-size: 22pt;
  line-height: 35px;
}

.kYNYfm {
  font-style: italic;
  font-weight: normal;
  font-size: 16.94pt;
  line-height: 27px;
}

.ikwKMt {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.bLStC {
  width: 8px;
  min-width: 8px;
  max-width: 8px;
  height: 8px;
  min-height: 8px;
  max-height: 8px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
}

.bLStC svg {
  min-width: 8px;
  max-width: 8px;
  height: 8px;
  min-height: 8px;
  max-height: 8px;
  display: block;
}

.bIBNwX {
  min-width: 0px;
  display: flex;
  padding-bottom: 0.64em;
  overflow-wrap: break-word;
}

.hAYHcG {
  min-width: 0px;
  display: flex;
  padding-bottom: 0.64em;
  overflow-wrap: break-word;
}

.FJIJl {
  color: rgb(51, 51, 51);
  text-align: right;
  font-variant-ligatures: normal !important;
}

.cWsMui {
  width: 100%;
}

.bMIiXy {
  width: 100%;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
}

.cDyKPi {
  order: 2;
  width: auto;
  height: auto;
  padding-top: 4px;
  padding-bottom: 0.3625em;
}

.ehtUVA {
  width: 130px;
}

.ehtUVA img {
  border-radius: 2px;
  width: 100%;
  height: auto;
}

.ihVcsk {
  -webkit-box-flex: 1;
  flex-grow: 1;
  padding-right: 1.6em;
}

.hpapvl {
  width: 100%;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
}

.gSwYSK {
  width: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  margin-bottom: 0.6728em;
  text-align: center;
  border-radius: 2px;
  padding-top: 3px;
  padding-bottom: 3px;
  background-color: rgba(88, 106, 106, 0.07);
}

.cLpKYR {
  margin-left: 0.35em;
}

.ffAcnw {
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: bold;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  font-size: 13pt;
  line-height: 25px;
  padding-top: 0.35496em;
  color: rgb(88, 106, 106);
}

.dIIHSS {
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: bold;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  font-size: 13pt;
  line-height: 25px;
  padding-top: 0px;
  color: rgb(88, 106, 106);
}

.eQNBxh {
  text-align: right;
}

.hWBhmK {
  display: flex;
  flex-flow: column wrap;
  align-items: flex-end;
  line-height: 20px;
  font-size: 10.5pt;
}

.dgNYeR {
  vertical-align: baseline;
  padding-left: 0.4em;
  padding-right: 0.2em;
}

.dgNYeR svg {
  display: inline-block;
  vertical-align: middle;
  fill: rgb(51, 51, 51);
  width: 0.7em;
  height: 0.7em;
  padding-bottom: 0.05em;
}

.grylYF {
  width: 100%;
}

.dsRAIh {
  width: 100%;
  white-space: pre-wrap;
  line-height: 20px;
  word-break: break-word;
}

.dsRAIh .ql-align-justify {
  text-align: justify;
}

.dKAIYf {
  height: 0.6em;
}

.bPhHHw {
  width: 100%;
  font-size: 10.5pt;
  line-height: 20px;
  padding-bottom: 0px;
}

.fhmGBI {
  display: inline-block;
  width: 100%;
  font-size: 10.5pt;
  line-height: 20px;
  padding-bottom: 0px;
}

.jWKXg {
  font-weight: bold;
  display: inline-block;
  white-space: pre-wrap;
}

.gpDyUT {
  white-space: pre-wrap;
  display: inline-block;
}

.bFBqHs {
  font-style: italic;
}

.jqYCPt {
  font-weight: bold;
  font-style: normal;
}

.HzXLO {
  width: 100%;
  font-size: 10.5pt;
  word-break: break-word;
}

.kiaYpP {
  display: block;
  width: 25%;
  padding-left: 1em;
}

.dzUhNA {
  display: none;
  width: 25%;
  padding-left: 1em;
}

.chodjw {
  width: 75%;
}

.cRvKND {
  width: 100%;
}

.dsTdSO {
  width: 100%;
  display: flex;
  font-size: 10.5pt;
  line-height: 20px;
}

.dsTdSO .DateLocationWrapper-sc-1o57xg9-1 {
  order: 2;
}

.fdHrJc {
  padding-bottom: 0.9425em;
}

.jxgONf {
  padding-bottom: 1.1832em;
}

.dqvodh {
  width: 100%;
  padding-bottom: 1.1832em;
  font-size: 10.5pt;
  line-height: 20px;
}

.kcbxaQ {
  height: 20px;
  max-height: 20px;
  min-height: 20px;
  padding-left: 0.6em;
}

.byqQEX {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 0.5em;
  -webkit-box-align: center;
  align-items: center;
}

.ctSIMl {
  display: inline-block;
  overflow-wrap: break-word;
  font-size: 10.5pt;
  line-height: 20px;
}

.izxbxQ {
  width: 100%;
  max-width: 100%;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
}

.bysUTv {
  width: 55%;
  -webkit-box-flex: 1;
  flex-grow: 1;
}

.bysUTv span {
  width: 100%;
}

.gjAcqF {
  display: flex;
  flex-direction: column;
  font-size: 10.5pt;
  margin-bottom: 0.743964em;
}

.dNVDdZ {
  display: flex;
  flex-direction: column;
  font-size: 10.5pt;
}

.jmFwIC {
  width: 100%;
}

.iYUciY {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 4em;
}

.clrQIs {
  white-space: pre-wrap;
}

.cUeEcF {
  border-radius: 50%;
  position: static;
  visibility: visible;
  width: 100%;
}

.ecEMsV {
  border-radius: 50%;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  overflow: hidden;
}

.eppruW {
  width: 100%;
  padding-bottom: 7.67908mm;
  background-color: rgb(217, 174, 137);
  box-shadow: rgb(217, 174, 137) 0px -1px 0px 1px;
  color: rgb(255, 255, 255);
  font-size: 10.5pt;
  line-height: 20px;
  white-space: pre-wrap;
}

.eppruW a,
.eppruW a:visited {
  color: rgb(255, 255, 255) !important;
}


.iudgRh {
  height: 7.09417mm;
}

.jzpuAm {
  display: flex;
  flex-direction: column;
  -webkit-box-flex: 1;
  flex-grow: 1;
}

.eYccBV {
  position: relative;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  margin-bottom: 32px;
  line-height: 20px;
  font-family: Lora;
  font-stretch: normal;
  font-synthesis: none;
  width: 210mm;
  height: 297mm;
  min-width: 210mm;
  min-height: 297mm;
  max-width: 210mm;
  max-height: 297mm;
  font-variant-ligatures: none !important;
  -webkit-font-smoothing: antialiased !important;
  text-rendering: geometricprecision !important;
}

@media print {
  .eYccBV {
    width: 210mm;
    height: 297mm;
    min-width: 210mm;
    min-height: 297mm;
    max-width: 210mm;
    max-height: 297mm;
  }
}

.fhPtSW {
  display: flex;
  -webkit-box-flex: 1;
  flex-grow: 1;
  background-color: rgb(255, 248, 242);
  padding: 0mm;
}

.iGyIlC {
  display: flex;
  flex-direction: column;
  -webkit-box-flex: 1;
  flex-grow: 1;
  color: rgb(51, 51, 51);
  background-color: rgb(255, 248, 242);
  padding: 0mm 16mm 11.6172mm;
}

.iZRHsc {
  display: flex;
  flex-direction: column;
  -webkit-box-flex: 1;
  flex-grow: 1;
  color: rgb(51, 51, 51);
  background-color: rgb(255, 248, 242);
  padding: 15.4708mm 16mm 11.6172mm;
}

.iZRHsc a,
.iZRHsc a:visited {
  color: rgb(51, 51, 51);
}

.fSFcfU {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  position: absolute;
  height: 60.4724px;
  bottom: 0px;
  right: 60.4724px;
  left: 60.4724px;
  color: rgb(51, 51, 51);
  opacity: 0.7;
}

.fSFcfU span {
  width: 100%;
}

.bXKacC {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
}

.fvUYNH {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: end;
  justify-content: flex-end;
}

/*! CSS Used fontfaces */
@font-face {
  font-family: 'Lora';
  src: url(https://d185xckpsn8u72.cloudfront.net/lora-700-normal.woff2) format('woff2'), url(https://d185xckpsn8u72.cloudfront.net/lora-700-normal.woff) format('woff');
  font-weight: 700;
  font-style: normal;
  font-stretch: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Lora';
  src: url(https://d185xckpsn8u72.cloudfront.net/lora-700-italic.woff2) format('woff2'), url(https://d185xckpsn8u72.cloudfront.net/lora-700-italic.woff) format('woff');
  font-weight: 700;
  font-style: italic;
  font-stretch: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Lora';
  src: url(https://d185xckpsn8u72.cloudfront.net/lora-400-normal.woff2) format('woff2'), url(https://d185xckpsn8u72.cloudfront.net/lora-400-normal.woff) format('woff');
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Lora';
  src: url(https://d185xckpsn8u72.cloudfront.net/lora-400-italic.woff2) format('woff2'), url(https://d185xckpsn8u72.cloudfront.net/lora-400-italic.woff) format('woff');
  font-weight: 400;
  font-style: italic;
  font-stretch: normal;
  font-display: swap;
}
</style>