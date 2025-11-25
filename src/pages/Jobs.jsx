// src/pages/Jobs.jsx
import React, {
  useState,
  useMemo,
  useEffect,
  useRef,
  memo,
} from "react";
import "./Jobs.css";

// ----------------- DATA -----------------

const EXPERIENCE_OPTIONS = [
  "0 years (Fresher)",
  "1 year",
  "2 years",
  "3 years",
  "4 years",
  "5 years",
  "6 years",
  "7 years",
  "8 years",
  "9 years",
  "10+ years",
];

const INDIA_LOCATIONS = [
  "Bengaluru / Bangalore",
  "Chennai",
  "Hyderabad / Secunderabad",
  "Pune",
  "Mumbai",
  "Navi Mumbai",
  "Thane",
  "Delhi",
  "New Delhi",
  "Gurugram",
  "Noida",
  "Kolkata",
  "Ahmedabad",
  "Jaipur",
  "Surat",
  "Coimbatore",
  "Madurai",
  "Kochi",
  "Trivandrum",
  "Indore",
  "Bhopal",
  "Nagpur",
  "Patna",
  "Lucknow",
  "Chandigarh",
  "Vizag",
  "Vijayawada",
  "Mysuru",
  "Hubballi",
  "Salem",
  "Trichy",
  "Erode",
];

const POPULAR_KEYWORDS = [
  "Frontend Developer",
  "React JS Developer",
  "Full-Stack Developer",
  "Backend Developer",
  "UI / UX Designer",
  "Product Designer",
  "DevOps Engineer",
  "Cloud Engineer",
  "Java Developer",
  "Python Developer",
  "Node JS Developer",
  "Data Analyst",
  "Business Analyst",
  "HR Executive",
  "Digital Marketing",
  "Sales Executive",
  "Accountant",
];

const ALL_JOBS = [
  // ---- IT JOBS ----
  {
    id: 1,
    title: "Frontend Software Engineer",
    company: "Info Edge",
    rating: 4.2,
    reviews: 2301,
    experience: "0-1 yrs",
    salary: "₹ 8-10 Lacs PA",
    location: "Bengaluru / Bangalore",
    tags: ["React.js", "JavaScript", "HTML", "CSS", "Frontend"],
    description:
      "Build responsive user interfaces for large scale consumer web applications. Work with product and design to ship high-quality features.",
    type: "IT",
    posted: "16 days ago",
    isRemote: false,
  },
  {
    id: 2,
    title: "Full-Stack Developer - Fresher",
    company: "TI Steps",
    rating: 3.9,
    reviews: 18,
    experience: "0-1 yrs",
    salary: "₹ 2-3 Lacs PA",
    location: "Hyderabad / Secunderabad",
    tags: ["JavaScript", "Node.js", "React", "MongoDB", "OOPS"],
    description:
      "Work on both front-end and back-end development tasks under guidance of senior engineers. Great role for freshers looking to learn.",
    type: "IT",
    posted: "1 day ago",
    isRemote: true,
  },
  {
    id: 3,
    title: "Senior React Developer",
    company: "Oorjaverse Tech Labs",
    rating: 4.6,
    reviews: 320,
    experience: "4-8 yrs",
    salary: "₹ 18-28 Lacs PA",
    location: "Chennai",
    tags: ["React", "TypeScript", "Redux", "Micro-frontends"],
    description:
      "Own the front-end of high-traffic SaaS products. Architect reusable components and mentor junior developers.",
    type: "IT",
    posted: "3 days ago",
    isRemote: true,
  },
  {
    id: 4,
    title: "Cloud / DevOps Engineer",
    company: "AzureBridge Systems",
    rating: 4.1,
    reviews: 112,
    experience: "2-5 yrs",
    salary: "₹ 10-16 Lacs PA",
    location: "Pune",
    tags: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD"],
    description:
      "Implement and maintain cloud infrastructure, automate deployments and establish monitoring for mission-critical apps.",
    type: "IT",
    posted: "5 days ago",
    isRemote: false,
  },
  {
    id: 5,
    title: "UI / UX Designer",
    company: "PixelCraft Studio",
    rating: 4.3,
    reviews: 74,
    experience: "1-4 yrs",
    salary: "₹ 6-10 Lacs PA",
    location: "Mumbai",
    tags: ["Figma", "User Research", "Prototyping", "Design Systems"],
    description:
      "Design web & mobile experiences for global clients. Work closely with product managers and developers.",
    type: "IT",
    posted: "7 days ago",
    isRemote: true,
  },

  // ---- NON-IT JOBS ----
  {
    id: 6,
    title: "Business Development Executive",
    company: "UrbanSpaces Realty",
    rating: 4.0,
    reviews: 220,
    experience: "0-3 yrs",
    salary: "₹ 3-6 Lacs PA + Incentives",
    location: "Delhi",
    tags: ["Sales", "Lead Generation", "Client Relationship"],
    description:
      "Identify potential clients, conduct property visits and close deals for residential and commercial projects.",
    type: "Non-IT",
    posted: "2 days ago",
    isRemote: false,
  },
  {
    id: 7,
    title: "Digital Marketing Specialist",
    company: "BrandLift Media",
    rating: 4.4,
    reviews: 140,
    experience: "1-4 yrs",
    salary: "₹ 5-8 Lacs PA",
    location: "Gurugram",
    tags: ["SEO", "Google Ads", "Social Media", "Analytics"],
    description:
      "Plan and execute performance marketing campaigns across search, social and display networks.",
    type: "Non-IT",
    posted: "6 days ago",
    isRemote: true,
  },
  {
    id: 8,
    title: "Finance & Accounts Executive",
    company: "PrimeLedger Consulting",
    rating: 3.8,
    reviews: 63,
    experience: "2-5 yrs",
    salary: "₹ 4-6 Lacs PA",
    location: "Chennai",
    tags: ["Tally", "GST", "MIS Reporting", "Reconciliation"],
    description:
      "Manage day-to-day accounting, GST filings and financial reports for SME clients.",
    type: "Non-IT",
    posted: "10 days ago",
    isRemote: false,
  },
  {
    id: 9,
    title: "HR Generalist",
    company: "PeopleFirst HR Solutions",
    rating: 4.1,
    reviews: 51,
    experience: "1-3 yrs",
    salary: "₹ 4-7 Lacs PA",
    location: "Bengaluru / Bangalore",
    tags: ["Recruitment", "Onboarding", "Payroll", "HR Policies"],
    description:
      "End-to-end HR role handling recruitment, onboarding, employee engagement and compliance.",
    type: "Non-IT",
    posted: "4 days ago",
    isRemote: false,
  },
  {
    id: 10,
    title: "Operations Executive",
    company: "SwiftLogistics",
    rating: 3.9,
    reviews: 97,
    experience: "0-2 yrs",
    salary: "₹ 3-4.5 Lacs PA",
    location: "Coimbatore",
    tags: ["Logistics", "Vendor Management", "MS Excel"],
    description:
      "Coordinate daily dispatch, track shipments and maintain MIS for warehouse operations.",
    type: "Non-IT",
    posted: "8 days ago",
    isRemote: false,
  },
];

// ----------------- COMPONENT -----------------

function Jobs() {
  const [keyword, setKeyword] = useState("");
  const [experience, setExperience] = useState("");
  const [location, setLocation] = useState("");
  const [jobTypeFilter, setJobTypeFilter] = useState("ALL");

  const [showKeywordPanel, setShowKeywordPanel] = useState(false);
  const [showExpPanel, setShowExpPanel] = useState(false);
  const [showLocationPanel, setShowLocationPanel] = useState(false);

  const keywordRef = useRef(null);
  const expRef = useRef(null);
  const locationRef = useRef(null);

  // Close panels when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        keywordRef.current &&
        !keywordRef.current.contains(e.target) &&
        expRef.current &&
        !expRef.current.contains(e.target) &&
        locationRef.current &&
        !locationRef.current.contains(e.target)
      ) {
        setShowKeywordPanel(false);
        setShowExpPanel(false);
        setShowLocationPanel(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filtered jobs (memoized for performance)
  const filteredJobs = useMemo(() => {
    const kw = keyword.trim().toLowerCase();
    const loc = location.trim().toLowerCase();

    return ALL_JOBS.filter((job) => {
      const matchesType =
        jobTypeFilter === "ALL" ? true : job.type === jobTypeFilter;

      const matchesKeyword =
        kw.length === 0
          ? true
          : job.title.toLowerCase().includes(kw) ||
            job.company.toLowerCase().includes(kw) ||
            job.tags.some((tag) => tag.toLowerCase().includes(kw));

      const matchesLocation =
        loc.length === 0
          ? true
          : job.location.toLowerCase().includes(loc);

      const matchesExperience =
        experience.length === 0
          ? true
          : job.experience.toLowerCase().includes(
              experience.toLowerCase().split(" ")[0] // rough match
            );

      return matchesType && matchesKeyword && matchesLocation && matchesExperience;
    });
  }, [keyword, experience, location, jobTypeFilter]);

  const handleSearchClick = () => {
    // we already filter via state, this is just to close panels
    setShowKeywordPanel(false);
    setShowExpPanel(false);
    setShowLocationPanel(false);
  };

  return (
    <main className="jobs-page">
      {/* ============ TOP SEARCH BAR ============ */}
      <section className="jobs-search-bar">
        <div className="jobs-logo-strip">
          <div className="jobs-mini-logo">DIRECTORY<span>PLUS</span> Jobs</div>
          <p className="jobs-mini-tagline">
            Smart job search for IT & Non-IT roles across India.
          </p>
        </div>

        <div className="jobs-search-row">
          {/* Keyword */}
          <div
            className="jobs-search-field"
            ref={keywordRef}
          >
            <label className="jobs-field-label">Enter keyword / designation / company</label>
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onFocus={() => {
                setShowKeywordPanel(true);
                setShowExpPanel(false);
                setShowLocationPanel(false);
              }}
              placeholder="e.g. React Developer, UI Designer, HR Manager"
              className="jobs-input"
            />
            {showKeywordPanel && (
              <div className="jobs-popover">
                <div className="jobs-popover-title">Popular searches</div>
                <div className="jobs-chips">
                  {POPULAR_KEYWORDS.map((item) => (
                    <button
                      key={item}
                      type="button"
                      className="jobs-chip"
                      onClick={() => setKeyword(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Experience */}
          <div
            className="jobs-search-field jobs-search-field--small"
            ref={expRef}
          >
            <label className="jobs-field-label">Select experience</label>
            <button
              type="button"
              className="jobs-input jobs-input--button"
              onClick={() => {
                setShowExpPanel((prev) => !prev);
                setShowKeywordPanel(false);
                setShowLocationPanel(false);
              }}
            >
              {experience || "Experience"}
              <span className="jobs-input-caret">▾</span>
            </button>
            {showExpPanel && (
              <div className="jobs-popover jobs-popover--compact">
                {EXPERIENCE_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    className={
                      "jobs-popover-item" +
                      (experience === opt ? " jobs-popover-item--active" : "")
                    }
                    onClick={() => setExperience(opt)}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Location */}
          <div
            className="jobs-search-field jobs-search-field--small"
            ref={locationRef}
          >
            <label className="jobs-field-label">Enter location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onFocus={() => {
                setShowLocationPanel(true);
                setShowKeywordPanel(false);
                setShowExpPanel(false);
              }}
              placeholder="Bengaluru, Chennai, Coimbatore..."
              className="jobs-input"
            />
            {showLocationPanel && (
              <div className="jobs-popover jobs-popover--scroll">
                <div className="jobs-popover-title">Top cities in India</div>
                {INDIA_LOCATIONS.filter((city) =>
                  city.toLowerCase().includes(location.toLowerCase())
                ).map((city) => (
                  <button
                    key={city}
                    type="button"
                    className="jobs-popover-item"
                    onClick={() => setLocation(city)}
                  >
                    {city}
                  </button>
                ))}
                <div className="jobs-popover-footer">
                  Tip: Start typing to filter the city list.
                </div>
              </div>
            )}
          </div>

          {/* Search Button */}
          <button
            type="button"
            className="jobs-search-button"
            onClick={handleSearchClick}
          >
            Search
          </button>
        </div>

        {/* Job type filter chips */}
        <div className="jobs-type-filters">
          <span className="jobs-type-label">Filters:</span>
          {["ALL", "IT", "Non-IT"].map((type) => (
            <button
              key={type}
              type="button"
              className={
                "jobs-type-chip" +
                (jobTypeFilter === type ? " jobs-type-chip--active" : "")
              }
              onClick={() => setJobTypeFilter(type)}
            >
              {type === "ALL" ? "All jobs" : type}
            </button>
          ))}
        </div>
      </section>

      {/* ============ CONTENT ============ */}
      <section className="jobs-content">
        {/* LEFT: JOB CARDS */}
        <div className="jobs-results-column">
          <div className="jobs-results-header">
            <div>
              <h1 className="jobs-results-title">Recommended jobs for you</h1>
              <p className="jobs-results-subtitle">
                Based on your skills and preferences — explore roles across top
                IT & Non-IT companies in India.
              </p>
            </div>
            <div className="jobs-results-count">
              {filteredJobs.length} jobs found
            </div>
          </div>

          <div className="jobs-list">
            {filteredJobs.map((job) => (
              <article key={job.id} className="job-card">
                <header className="job-card-header">
                  <div>
                    <h2 className="job-title">{job.title}</h2>
                    <div className="job-company-row">
                      <span className="job-company">{job.company}</span>
                      <span className="job-rating">
                        ★ {job.rating.toFixed(1)}{" "}
                        <span className="job-rating-reviews">
                          ({job.reviews} reviews)
                        </span>
                      </span>
                    </div>
                  </div>
                  <span className="job-type-pill">
                    {job.type === "IT" ? "IT / Software" : "Non-IT / Others"}
                  </span>
                </header>

                <div className="job-meta-row">
                  <div className="job-meta-item">🧑‍💻 {job.experience}</div>
                  <div className="job-meta-item">💰 {job.salary}</div>
                  <div className="job-meta-item">📍 {job.location}</div>
                  {job.isRemote && (
                    <div className="job-meta-item job-meta-remote">
                      🌐 Remote / Hybrid
                    </div>
                  )}
                </div>

                <p className="job-description">{job.description}</p>

                <div className="job-tags-row">
                  {job.tags.map((tag) => (
                    <span key={tag} className="job-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <footer className="job-card-footer">
                  <div className="job-posted-text">Posted {job.posted}</div>
                  <div className="job-footer-actions">
                    <button type="button" className="job-save-btn">
                      ♡ Save
                    </button>
                    <button type="button" className="job-apply-btn">
                      Apply now
                    </button>
                  </div>
                </footer>
              </article>
            ))}

            {filteredJobs.length === 0 && (
              <div className="jobs-empty-state">
                <h3>No matching jobs found</h3>
                <p>
                  Try removing some filters or searching with a broader keyword.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT: Premium Sidebar */}
<aside className="jobs-sidebar">
  <section className="jobs-preferences-card">
    <h3 className="jobs-pref-title">Add preferences to get matching jobs</h3>

    <div className="jobs-pref-row">
      <div className="jobs-pref-label">Preferred job role</div>
      <button
        type="button"
        className="jobs-pref-button"
        onClick={() => setShowKeywordPanel(true)}
      >
        Add
      </button>
    </div>

    <div className="jobs-pref-row">
      <div className="jobs-pref-label">Preferred work location</div>
      <button
        type="button"
        className="jobs-pref-button"
        onClick={() => setShowLocationPanel(true)}
      >
        {location || "Add"}
      </button>
    </div>

    <div className="jobs-pref-row">
      <div className="jobs-pref-label">Preferred salary</div>
      <button type="button" className="jobs-pref-button">Add</button>
    </div>

    <p className="jobs-pref-helper">
      Add your preferences to see more accurate job recommendations.
    </p>
  </section>

  <section className="jobs-webinar-card">
    <h3 className="jobs-webinar-title">Join free webinar · Career Growth</h3>
    <p className="jobs-webinar-text">
      Learn how to build a strong profile, crack interviews and get higher salaries.
    </p>
    <button type="button" className="jobs-webinar-btn">Register for webinar</button>
  </section>
</aside>

      </section>
    </main>
  );
}

export default memo(Jobs);
