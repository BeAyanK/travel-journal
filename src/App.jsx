
import Navbar from './components/Navbar'
import Card from './components/Card'
import Footer from './components/Footer'

export default function App() {

  return (
    <div className="App">
      <Navbar />
      <Card
        image="https://source.unsplash.com/WLxQvbMyfas"
        title="JAPAN"
        map="https://goo.gl/maps/voZcPv3tjBjoeU4L8"
        place="Mount Fuji"
        date="12 Jan, 2022 - 24 Jan, 2022"
        description="Mount Fuji, or Fuji-san in Japanese, is an iconic mountain located on Honshu, the largest island of Japan. It is the highest mountain in Japan, with a height of 3,776.24 meters (12,389 feet), and is considered one of the country's most sacred symbols."
      />
      <Card
        image="https://source.unsplash.com/JmuyB_LibRo"
        title="AUSTRALIA"
        map="https://goo.gl/maps/69to7Zc9ip46asmN9"
        place="Sydney Opera House"
        date="27 May, 2022 - 8 Jun, 2022"
        description="The Sydney Opera House is a world-famous performing arts center located in Sydney, Australia. It is one of the most iconic and recognizable buildings in the world, known for its distinctive sail-like roof design."
      />
      <Card
        image="https://source.unsplash.com/3PeSjpLVtLg"
        title="NORWAY"
        map="https://goo.gl/maps/ePV6UFSqmi1p83n3A"
        place="Geirangerfjord"
        date="1 Oct, 2022 - 18 Nov, 2022"
        description="Geiranger Fjord is a fjord located in western Norway, near the small town of Geiranger. It is one of Norway's most famous and visited tourist attractions, known for its spectacular scenery of steep mountains, waterfalls, and crystal-clear water."
      
      />
      <Card
        image="/public/images/greece.jpg"
        title="GREECE"
        map="https://goo.gl/maps/sKZ192f4HVk5rMt58"
        place="Santorini"
        date="10 Feb, 2023 - 21 Feb, 2023"
        description="Santorini is famous for its beautiful and unique natural scenery, including its white-washed buildings and blue-domed churches perched on the cliffs overlooking the Aegean Sea. The island is also renowned for its stunning sunsets, which attract visitors from around the world."
      />
      <Footer />
    </div>
  )
}

