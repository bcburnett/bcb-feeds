

document.querySelector('bcb-navbar').addEventListener('bcbnavbar', e => navigate(e.detail))


const navigate = (e)=>{
  console.log(e)
  switch (e) {
    case 'Top of Page':
      document.documentElement.scrollTop = 0;
      break;
    case 'Middle of Page':
     window.scrollTo(0, document.body.scrollHeight/4);
      break;
    case 'Bottom of Page':
      window.scrollTo(0, document.body.scrollHeight);
      break;
}
}

const setContent= e => {
  console.log(e)
  let content = document.querySelector('bcb-content')
  switch (e) {
    case 'About':
      content.slot = 'slot1'
      break;

    case 'Nav':
      content.slot = 'slot2'
      break;

    case 'Input':
      content.slot = 'slot3'
      break;

    case 'Check':
      content.slot = 'slot4'
      break;

    case 'Calc':
      content.slot = 'slot5'
      break;

    case 'Todo':
      content.slot = 'slot6'
      break;

    case 'Content':
      content.slot = 'slot7'
      break;

    case 'Tabs':
      content.slot = 'slot8'
      break;

    case 'Clock':
      content.slot = 'slot9'
      break;

    case 'Download':
      window.location = 'website.zip'
      break;

    default:
      break;
  }
}

var scrollPos = 0;
document.addEventListener('scroll', function () {
  if ((document.body.getBoundingClientRect()).top > scrollPos){
    document.querySelector('bcb-navbar').classList.remove('hidden')}else
  { document.querySelector('bcb-navbar').classList.add('hidden') }
  scrollPos = (document.body.getBoundingClientRect()).top;
});


