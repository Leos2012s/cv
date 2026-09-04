import './App.css';

function App() {
  return (
    <main>
      <h1>CV</h1>
      <table>
        <tbody>
          <tr>
            <td>
              <p><img
                src="/zdj.jpg"
                alt="Moje zdjęcie"
                width="150"
              /></p>
              <h2>Jakub Wiśniewski</h2>
            </td>
            <td valign="top">
              <h2>Ukończone szkoły</h2>
              <p>Szkola podstawowa</p>
              <p>Szkola średnia techniczna-programista</p>
            </td>
          </tr>
        </tbody>
      </table>

      <section className="project">
        <h2>Mój projekt</h2>
        <h3>Survival</h3>
        <img className="project-image" src="/gra.png" alt="Gra Survival" />
        <p>prosta gra survival</p>
      </section>
    </main>
  );
}

export default App;
