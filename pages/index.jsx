import Card from "../components/Card"
import EntradaNumerica from "../components/EntradaNumerica"
import styles from "../styles/Form.module.css"
import Link from "next/link"
import { useState } from "react"

export default function Form() {
  const [qtdePortas, setQtdePortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)

  return (
    <div className={styles.form}>
      <div>
        <Card bgcolor="#c0392c">
          <h1 className={styles.logo}>Monty Hall</h1>
        </Card>
        <Card>
          <EntradaNumerica text="Quantidade de Portas:" value={qtdePortas} onChange={novaQtde => setQtdePortas(novaQtde)}></EntradaNumerica>
        </Card>
      </div>
      <div>
        <Card>
        <EntradaNumerica text="Porta Premiada:" value={comPresente} onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)}></EntradaNumerica>
        </Card>
        <Card bgcolor="#28a085">
          <Link href={`/jogo/${qtdePortas}/${comPresente}`} passHref>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  )
}
