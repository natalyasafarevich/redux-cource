import {useDispatch, useSelector} from 'react-redux';
import styles from './RecipeItem.module.css';
import {useActions} from '../hooks/useActions';
import {useFavorites} from '../hooks/useFavorites';

function RecipeItem({recipe}) {
  const favorites = useFavorites();

  const isExist = favorites.some((r) => r.id == recipe.id);

  const {toggleToFavorites} = useActions();

  return (
    <div className={styles.item}>
      <h2>{recipe.name}</h2>
      <button onClick={() => toggleToFavorites(recipe)}>
        {isExist ? 'Remove from' : ' Add to'} favorites
      </button>
    </div>
  );
}

export default RecipeItem;
