import { Header } from "./components/Header"
import { Post } from "./Post"

import "./styles.css"

export function App() {
  return (
    <div>
      <Header/>
      <h1>Hello World!</h1>
      <Post
        author="Diego Fernandes"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident laboriosam cum consequuntur amet molestiae suscipit veritatis, recusandae eveniet obcaecati? Totam ipsam, dolorem soluta in inventore odit mollitia veniam! Distinctio, harum."
      />
      <Post
        author="Gustavo Guanabara"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident laboriosam cum consequuntur amet molestiae suscipit veritatis, recusandae eveniet obcaecati? Totam ipsam, dolorem soluta in inventore odit mollitia veniam! Distinctio, harum."
      />
      <Post/>
    </div>
  )
}
