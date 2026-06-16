import { useState } from 'react';
import './App.css';
import heroImg from './assets/hero.png';

function App() {
  const [step, setStep] = useState<number>(1);
  const [userType, setUserType] = useState<'company' | 'solo' | null>(null);

  // Stati per gestire i campi del form
  const [companyName, setCompanyName] = useState<string>('');
  const [teamSize, setTeamSize] = useState<string>('30-50');
  const [description, setDescription] = useState<string>(
    
  );

  const handleSelectType = (type: 'company' | 'solo') => {
    setUserType(type);
  
    if (type === 'solo') {
      setCompanyName('Freelance / Nome');
      setTeamSize('1-n10');
    }
      setCompanyName('Freelance / Nome');
    setStep(2);
  };

  return (
    <div className="app-wrapper">
      
     
      <div className={`blob-bg ${step === 2 ? 'step-2-active' : ''}`}></div>

      <main className="app-container">
        
        {step === 1 && (
          <section className="card-layout step-one animate-fade-in">
            <header className="card-header">
              <span className="breadcrumb">Organizzazione / 01</span>
              <div className="brand-header">
                <span className="brand-cielo">Flowlee</span>
              </div>
              <span className="user-profile">Andrea ::</span>
            </header>

            <div className="Uno">
              <div className="Due">
                <h1 className="main-title">
                  Iniziamo,senza perdere altro tempo. <br />
                  Lavori con un'azienda<br />
                  o sei un freelance?
                  Diccelo qui sotto.
                </h1>

                 
                
                <div className="ciao">
                  <button className="btn btn-dark" onClick={() => handleSelectType('company')}>
                   Azienda
                  </button>
                  <button className="btn btn-light" onClick={() => handleSelectType('solo')}>
                    Lavoro da solo
                  </button>
                </div>
              </div>

              <div className="content-right">
                <div className="hero-image-wrapper">
                  <img src={heroImg} alt="Flowlee Illustration" className="hero-image" />
                </div>
              </div>
            </div>
          </section>
        )}

        {step === 2 && (
          <section className="card-layout step-two animate-fade-in">
            <header className="card-header">
              <span className="breadcrumb">Organizzazione / 02</span>
              <div className="brand-header">
                <span className="brand-text">Flowlee</span>
              </div>
              <span className="user-profile">Andrea ::</span>
            </header>

            <div className="card-body form-split">
          
              <div className="Tre">
                <span className="box-label">Logo</span>
                <div className="4">
                  <svg className="company-logo" width="120" height="50">
                    <use href="/icons.svg#icons" /> 
                  </svg>
                  <span className="logo-subtext">
                    {userType === 'company' ? 'COMPANY' : 'SOLO'}
                  </span>
                </div>
              </div>

              {/* Form Input a Destra */}
              <div className="form-container-box">
                <form onSubmit={(e) => e.preventDefault()} className="flowlee-form">
                  
                  <div className="form-group">
                    <label htmlFor="companyName">
                      {userType === 'company' ? "Nome dell'azienda" : "Nome Professionista"}
                    </label>
                    <input 
                      type="text" 
                      id="companyName" 
                      value={companyName} 
                      onChange={(e) => setCompanyName(e.target.value)} 
                    />
                  </div>

                  {/* Mostra la dimensione del team solo se è un'azienda */}
                  {userType === 'company' && (
                    <div className="form-group">
                      <label htmlFor="teamSize">Numero persone</label>
                      <div className="select-wrapper">
                        <select 
                          id="teamSize" 
                          value={teamSize} 
                          onChange={(e) => setTeamSize(e.target.value)}
                        >
                          <option value="1-10">1-10 persone</option>
                          <option value="11-30">11-30 persone</option>
                          <option value="30-50">30-55s persone</option>
                          
                        </select>
                      </div>
                    </div>
                  )}

                  <div className="form-group">
                    <label htmlFor="description">Di cosa ti occupi??</label>
                    <textarea 
                      id="description"
                      rows={4}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>

                  
                  <div className="form-actions">
                    <button type="button" className="btn btn-light" onClick={() => setStep(1)}>
                      Torna Indietro
                    </button>
                    <button type="submit" className="btn btn-dark">
                      Salva e Continua
                    </button>
                  </div>

                </form>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;


