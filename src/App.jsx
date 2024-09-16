import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import styles from "./App.module.css"

import "./global.css"

export function App() {
  return (
    <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident laboriosam cum consequuntur amet molestiae suscipit veritatis, recusandae eveniet obcaecati? Totam ipsam, dolorem soluta in inventore odit mollitia veniam! Distinctio, harum."
          />
          <Post
            author="Gustavo Guanabara"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident laboriosam cum consequuntur amet molestiae suscipit veritatis, recusandae eveniet obcaecati? Totam ipsam, dolorem soluta in inventore odit mollitia veniam! Distinctio, harum."
          />
        </main>
      </div>
    </div>
  )
}
