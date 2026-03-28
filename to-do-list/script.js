let appNote = {
   data(){
    return{
        title:'Щоб не забути...',
        note:'',   //одна нотатка
        notesArr:[],   // масив усіх нотаток
    }
   },
   methods:{
        Add(){
            if (this.note != '' && this.note != ' '){
                this.notesArr.unshift(this.note);
                this.note = '';//новий рядочок
                localStorage.setItem( 'key', JSON.stringify(this.notesArr))
            }
            console.log(this.notesArr);
            
        }, 
        Delete(i){
            this.notesArr.splice(i, 1)
            localStorage.setItem( 'key', JSON.stringify(this.notesArr))
        }
       },
       mounted(){
            if (localStorage.getItem('key') != null){
                this.notesArr = JSON.parse(localStorage.getItem('key'))
        
            }
        }

}

Vue.createApp(appNote).mount('.main-to-do-list')

 










// let appNote = {
//     data() {
//         return {
//             title: 'Список справ',
//             note: '',
//             noteArr: [],
//             pidkazka:'Введіть свою справу',
//         }
//     },
//     methods: {
//         addNote() {
//             if (this.note != ''){
//                 this.noteArr.push(this.note);
//                 localStorage.setItem('alala', JSON.stringify(this.noteArr));
//                 this.note = ''
//             }
//         },
//         DelNote(i){
//             this.noteArr.splice(i, 1);
//             localStorage.setItem('alala', JSON.stringify(this.noteArr));
//         }
//     },
//     mounted() {
//         if  (localStorage.getItem('alala') != null){
//             this.noteArr = JSON.parse(localStorage.getItem('alala'));
//         }
//     },
// }
// Vue.createApp(appNote).mount('#vue-notes')


 

// this.noteArr = JSON.parse(localStorage.getItem('alala'))
