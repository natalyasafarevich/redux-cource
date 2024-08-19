import {useFavorites} from './hooks/useFavorites';
import RecipeItem from './recipe-item/RecipeItem';
import {FaHeart} from 'react-icons/fa';

function App() {
  const favorites = useFavorites();
  return (
    <section>
      <header style={{padding: '10px'}}>
        <span>{favorites.length}</span>
        <FaHeart />
      </header>
      <div>
        <RecipeItem recipe={{name: 'Пирог', id: 1}} />
        <RecipeItem recipe={{name: 'Суп', id: 2}} />
        <RecipeItem recipe={{name: 'Пицца', id: 3}} />
      </div>
    </section>
  );
}

export default App;
