export function Home() {
    return (
        <div className="home">
            <section className="searchOptions">
                <div className="search">
                    <input type="search" name="search" id="find" placeholder="&#x1F50E;&#xFE0E;    Search for a Country..." />
                </div>
                <div>
                    
                </div>
                <div className="options">
                    <select id="countrys" name="countrys">
                        <option value="none" selected disabled hidden>Filter By Region</option>
                        <option value="Brazil">Brazil</option>
                        <option value="Iraque">Iraque</option>
                        <option value="Russia">Russia</option>
                        <option value="Roma">Roma</option>
                    </select>
                </div>
            </section>

            <section>
                <div className="dataCountry">
                    <div className="dataCountryElement">
                        <div className="flag">
                            <img src="./images/brazil.jpg" alt="brazil" />
                        </div>
                        <div className="info">
                            <h5>Brazil</h5>
                            <p>Population: <span>81.779,900</span></p>
                            <p>Region: <span>América do Sul</span></p>
                            <p>Capital: <span>Brasília</span></p>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}