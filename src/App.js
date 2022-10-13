import './App.css';

function Item(props) {
  return (
    <div className='items'>
      <p><b>Name:&nbsp;</b>{props.name}</p>
      <p><b>Price:&nbsp;</b>{props.price}</p>
      <img className="food-pictures" alt="food" src={props.img}/>
      <br/>
      <button className='button'>Order</button>
    </div>
  )
}


function App() {
  return (
    <div className="App">
    <h1>Fast tasty food 🍔</h1>
    <h2 style={{color:'green'}}>Welcome to Alexander's restaurant</h2>
    <div className='food-list'>
    <Item name="Pittah" price="€8.00" img="https://pita-yara.be/wp-content/uploads/2021/10/Broodje-Pita.png"/>
    <Item name="Durum" price="€7.00" img="https://down.imgspng.com/download/0720/kebab_PNG32.png"/>
    <Item name="Tacos" price="€9.00" img="https://www.pngall.com/wp-content/uploads/4/Taco-PNG-Photo.png"/>
    <Item name="Pupitas" price="€8.00" img="https://www.pngmart.com/files/19/Pupusa-Cuisine-PNG-Clipart.png"/>
    <Item name="Burritos" price="€6.00" img="https://static.wixstatic.com/media/aef13b_acb617e0fc2045b58892fdccd251715f~mv2.png/v1/fill/w_560,h_428,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Fiesta%20Fajita%20Burrito.png"/>
    <Item name="Tamales" price="€5.00" img="https://bobstacos.com/wp-content/uploads/2016/09/tamales-copy.png"/>
    <Item name="Chicken" price="€10.00" img="https://assets.stickpng.com/images/580b57fbd9996e24bc43c0ce.png"/>
    <Item name="Pasta" price="€3.00" img="https://pngimg.com/uploads/pasta/pasta_PNG58.png"/>
    </div>
    </div>
  );
}

export default App;
