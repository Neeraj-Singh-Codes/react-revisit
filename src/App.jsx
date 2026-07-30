import Card from './Components/Card'

const App = () => {
  const animechars = [
    {
      img : 'https://w0.peakpx.com/wallpaper/712/885/HD-wallpaper-kaido-wano-anime-luffy-one-piece-manga.jpg',
      name:'Monkey D. Luffy',
      line:'Gonna become the king of the pirates'
    },
    {
      img : 'https://w0.peakpx.com/wallpaper/440/254/HD-wallpaper-sage-naruto-naruto-shippuden-pain-sage-mode-naruto-shounen.jpg',
      name:'Uzumaki Naruto',
      line:'I am gonna be the Hokage Oneday'
    },
    {
      img : 'https://w0.peakpx.com/wallpaper/898/1022/HD-wallpaper-attack-on-titan-eren-yeager.jpg',
      name:'Eren Yeager',
      line:"If you win you live, If you lose you die, but if you don't fight you'll never wine"
    },
    {
      img : 'https://wallpapercave.com/wp/wp3601063.jpg',
      name:'Ichigo Kurosaki',
      line: "Just stay alive till I arrive, when I arrive, I'll handle everything"
    }
  ]
  return (
    <>
    <div className='Parent-div'>
      {animechars.map(function(elem,id){
        return <Card name={elem.name} line={elem.line} img={elem.img}/>
      })}
      </div>
    </>
  )
}

export default App