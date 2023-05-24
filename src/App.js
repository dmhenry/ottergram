import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import Barry from './otters/otter1.jpg';
import Robin from './otters/otter2.jpg';
import Maurice from './otters/otter3.jpg';
import Lesley from './otters/otter4.jpg';
import Barbara from './otters/otter5.jpg';

const ottersArray = [
  { image: Barry, name: 'Barry', key: 1 },
  { image: Robin, name: 'Robin', key: 2},
  { image: Maurice, name: 'Maurice', key: 3 },
  { image: Lesley, name: 'Lesley', key: 4},
  { image: Barbara, name: 'Barbara', key: 5 },
]

export default function App() {
  return (
    <div>
      <Header />
      <ul className='post-list'>
        {ottersArray.map((post) => (
          <Post
            key={post.key}
            image={post.image}
            name={post.name}
          />
        ))}
      </ul>
    </div>
  );
}
