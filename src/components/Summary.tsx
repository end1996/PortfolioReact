type SummaryProps = {
  theme: string;
};

export function Summary({theme}: SummaryProps) {
  return (
    <div className="container">
      <div className="position-relative d-flex text-center mb-5">
        <h2 className="text-132 fw-bold w-100 mb-0 opacity-1">SUMMARY</h2>
        <p className="text-36 fw-bold position-absolute w-100 align-self-center lh-base mb-0">
          Resume
          <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto"></span>
        </p>
      </div>
      <div className="row gx-5 text-start">
        <div className="col-md-6">
          <h2 className="text-6 fw-600 mb-4">My Education</h2>
          <div className={`rounded p-4 mb-4 ${theme === 'dark' ? 'bg-light text-dark' : 'bg-dark text-light'}`}>
            <p className="badge bg-primary text-2 fw-400">2000 - 2004</p>
            <h3 className="text-5">Computer Science</h3>
            <p className="text-primary">International University</p>
            <p className="mb-0-50">
              Lisque persius interesset his et, in quot quidam persequeris vim,
              ad mea essent possim iriure.
            </p>
          </div>
          {/* <div className="border rounded p-4 mb-4"> */}
          <div className={`rounded p-4 mb-4 ${theme === 'dark' ? 'bg-light text-dark' : 'bg-dark text-light'}`}>
            <p className="badge bg-primary text-2 fw-400">2005 - 2008</p>
            <h3 className="text-5">Bachelor Degree</h3>
            <p className="text-primary">University of California</p>
            <p className="mb-0-50">
              Lisque persius interesset his et, in quot quidam persequeris vim,
              ad mea essent possim iriure.
            </p>
          </div>
          <div className={`rounded p-4 mb-4 ${theme === 'dark' ? 'bg-light text-dark' : 'bg-dark text-light'}`}>
            <p className="badge bg-primary text-2 fw-400">2009 - 2012</p>
            <h3 className="text-5">Master Degree</h3>
            <p className="text-primary">Harvard University</p>
            <p className="mb-0-50">
              Lisque persius interesset his et, in quot quidam persequeris vim,
              ad mea essent possim iriure.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <h2 className="text-6 fw-600 mb-4">My Experience</h2>
          <div className={`rounded p-4 mb-4 ${theme === 'dark' ? 'bg-light text-dark' : 'bg-dark text-light'}`}>
            <p className="badge bg-primary text-2 fw-400">2012 - 2013</p>
            <h3 className="text-5">Jr. UI UX Designer</h3>
            <p className="text-primary">Themeforest</p>
            <p className="mb-0-50">
              Lisque persius interesset his et, in quot quidam persequeris vim,
              ad mea essent possim iriure.
            </p>
          </div>
          <div className={`rounded p-4 mb-4 ${theme === 'dark' ? 'bg-light text-dark' : 'bg-dark text-light'}`}>
            <p className="badge bg-primary text-2 fw-400">2014 - 2016</p>
            <h3 className="text-5">Jr. Product Designer</h3>
            <p className="text-primary">Dribbble</p>
            <p className="mb-0-50">
              Lisque persius interesset his et, in quot quidam persequeris vim,
              ad mea essent possim iriure.
            </p>
          </div>
          <div className={`rounded p-4 mb-4 ${theme === 'dark' ? 'bg-light text-dark' : 'bg-dark text-light'}`}>
            <p className="badge bg-primary text-2 fw-400">2017 - 2019</p>
            <h3 className="text-5">Product Designer</h3>
            <p className="text-primary">Adobe</p>
            <p className="mb-0-50">
              Lisque persius interesset his et, in quot quidam persequeris vim,
              ad mea essent possim iriure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
