import styles from '../styles/Form.module.scss';

function Form() {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <h1 className={styles.heading}>Osobné údaje</h1>

                <label className={styles.label} htmlFor="meno">Meno:</label>
                <input className={`${styles.input} ${styles.required}`} type="text" name="meno" id="meno" size="20"
                       required/>

                <label className={styles.label} htmlFor="priezvisko">Priezvisko:</label>
                <input className={`${styles.input} ${styles.required}`} type="text" name="priezvisko" id="priezvisko"
                       required/>

                <label className={styles.label} htmlFor="mobil">Mobil:</label>
                <input className={`${styles.input} ${styles.required}`} type="text" name="mobil" id="mobil" size="15"
                       placeholder="+421903123456"/>

                <label className={styles.label} htmlFor="email">E-mail:</label>
                <input className={`${styles.input} ${styles.required}`} type="text" name="email" id="email"
                       placeholder="janko.mrkvicka@infovek.sk"/>

                <label className={styles.label} htmlFor="vek">Vek:</label>
                <select className={`${styles.select} ${styles.required}`} name="vek" id="vek" required>
                    <option value="" disabled selected>-- Vyberte vek --</option>
                    <option value="18-25">18 - 25</option>
                    <option value="25-30">25 - 30</option>
                    <option value="30-40">30 - 40</option>
                    <option value="40-50">40 - 50</option>
                    <option value="50-">50 a viac</option>
                </select>

                <label className={styles.label}>Prevádzka:</label>
                <div>
                    <label><input className={styles.radio} type="radio" name="mesto" id="ba" value="BA"
                                  required/> Bratislava</label>
                </div>
                <label><input className={styles.radio} type="radio" name="mesto" id="bb" value="BB" required/> Banská
                    Bystrica</label>

                <label className={styles.label} htmlFor="vzdelanie">Vzdelanie:</label>
                <textarea className={styles.textarea} name="vzdelanie" id="vzdelanie"></textarea>

                <label className={styles.label} htmlFor="prax">Prax:</label>
                <textarea className={styles.textarea} name="prax" id="prax" cols="25" rows="5"></textarea>

                <label className={styles.label} htmlFor="pozicia">Pozícia:</label>
                <select className={`${styles.select} ${styles.required}`} name="pozicia" id="pozicia" required>
                    <option value="" disabled selected>-- Vyberte pozíciu --</option>
                    <option value="kuchár">kuchár</option>
                    <option value="čašník">čašník</option>
                    <option value="vodič">vodič</option>
                    <option value="roznášač">roznášač</option>
                    <option value="pomocná sila">pomocná sila</option>
                </select>

                <label className={styles.label}>Jazyky:</label>
                <div>
                    <label><input className={styles.checkbox} type="checkbox" name="aj" id="aj"
                                  value="aj"/> anglický</label>
                </div>
                <div>
                    <label><input className={styles.checkbox} type="checkbox" name="nj" id="nj"
                                  value="nj"/> nemecký</label>
                </div>
                <div>
                    <label><input className={styles.checkbox} type="checkbox" name="tj" id="tj"
                                  value="tj"/> taliansky</label>
                </div>
                <div>
                    <label><input className={styles.checkbox} type="checkbox" name="sj" id="sj"
                                  value="sj"/> španielsky</label>
                </div>
                <div>
                    <label><input className={styles.checkbox} type="checkbox" name="mj" id="mj"
                                  value="mj"/> maďarský</label>
                </div>
                <div className={styles.submitInfo}>
                    <label><input className={styles.checkbox} type="checkbox" name="suhlas" id="suhlas" value="suhlasim"
                                  required/> Súhlasím so spracovaním osobných údajov</label>
                </div>

                <button className={styles.button} type="submit" value="odosli" name="odosli">Odošli</button>
                <button className={`${styles.button} ${styles.reset}`} type="reset" value="reset" name="reset">Zmaž
                </button>
            </form>
        </div>
    );
}

export default Form;