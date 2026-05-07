import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SurrogateForm.css';

const SurrogateForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    nationality: '',
    stateOfResidence: '',
    city: '',
    maritalStatus: '',
    height: '',
    weight: '',
    bloodGroup: '',
    hasCarriedBefore: '',
    numberOfChildren: '',
    childrenAges: '',
    hadComplicatedPregnancy: '',
    complicationDetails: '',
    hasChronicIllness: '',
    illnessDetails: '',
    onMedication: '',
    medicationDetails: '',
    smokes: '',
    drinksAlcohol: '',
    hasBeenSurrogateBefore: '',
    motivationForSurrogacy: '',
    willingForMedicalExam: '',
    willingForPsychEval: '',
    willingToSignLegalAgreement: '',
    preferredArrangement: '',
    availableToStart: '',
    hasPartnerConsent: '',
    partnerName: '',
    educationLevel: '',
    occupation: '',
    employmentStatus: '',
    livingSituation: '',
    hasHealthInsurance: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    emergencyContactRelationship: '',
    additionalInfo: '',
    agreeToTerms: false,
    agreeToPrivacy: false,
  });

  const totalSteps = 4;

  const stepConfig = [
    {
      number: 1,
      label: 'Personal',
      sublabel: 'Identity & Contact',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      ),
    },
    {
      number: 2,
      label: 'Medical',
      sublabel: 'Health History',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      ),
    },
    {
      number: 3,
      label: 'Surrogacy',
      sublabel: 'Programme Details',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
    },
    {
      number: 4,
      label: 'Background',
      sublabel: 'Lifestyle & Contact',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      ),
    },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateStep = (currentStep) => {
    const newErrors = {};
    if (currentStep === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'Required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Required';
      if (!formData.email.trim()) newErrors.email = 'Required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Enter a valid email';
      if (!formData.phone.trim()) newErrors.phone = 'Required';
      if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Required';
      if (!formData.stateOfResidence.trim()) newErrors.stateOfResidence = 'Required';
      if (!formData.maritalStatus) newErrors.maritalStatus = 'Required';
    }
    if (currentStep === 2) {
      if (!formData.bloodGroup) newErrors.bloodGroup = 'Required';
      if (!formData.hasCarriedBefore) newErrors.hasCarriedBefore = 'Required';
      if (formData.hasCarriedBefore === 'yes' && !formData.numberOfChildren) newErrors.numberOfChildren = 'Required';
    }
    if (currentStep === 3) {
      if (!formData.motivationForSurrogacy.trim()) newErrors.motivationForSurrogacy = 'Required';
      if (!formData.willingForMedicalExam) newErrors.willingForMedicalExam = 'Required';
      if (!formData.willingToSignLegalAgreement) newErrors.willingToSignLegalAgreement = 'Required';
      if (!formData.availableToStart) newErrors.availableToStart = 'Required';
    }
    if (currentStep === 4) {
      if (!formData.emergencyContactName.trim()) newErrors.emergencyContactName = 'Required';
      if (!formData.emergencyContactPhone.trim()) newErrors.emergencyContactPhone = 'Required';
      if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must confirm accuracy of information';
      if (!formData.agreeToPrivacy) newErrors.agreeToPrivacy = 'You must agree to the privacy policy';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => { if (validateStep(step)) setStep(prev => Math.min(prev + 1, totalSteps)); };
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep(step)) return;
    setLoading(true);
    const body = `
SURROGATE APPLICATION — ${formData.firstName} ${formData.lastName}
${'='.repeat(50)}

PERSONAL INFORMATION
${'─'.repeat(30)}
Full Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Date of Birth: ${formData.dateOfBirth}
Nationality: ${formData.nationality}
State of Residence: ${formData.stateOfResidence}
City: ${formData.city}
Marital Status: ${formData.maritalStatus}

MEDICAL & HEALTH
${'─'.repeat(30)}
Height: ${formData.height} cm | Weight: ${formData.weight} kg
Blood Group: ${formData.bloodGroup}
Carried Pregnancy Before: ${formData.hasCarriedBefore}
Number of Children: ${formData.numberOfChildren}
Children Ages: ${formData.childrenAges}
Complicated Pregnancy: ${formData.hadComplicatedPregnancy}
Complication Details: ${formData.complicationDetails}
Chronic Illness: ${formData.hasChronicIllness}
Illness Details: ${formData.illnessDetails}
On Medication: ${formData.onMedication}
Medication Details: ${formData.medicationDetails}
Smokes: ${formData.smokes}
Drinks Alcohol: ${formData.drinksAlcohol}

SURROGACY PROGRAMME
${'─'.repeat(30)}
Been Surrogate Before: ${formData.hasBeenSurrogateBefore}
Motivation: ${formData.motivationForSurrogacy}
Willing for Medical Exam: ${formData.willingForMedicalExam}
Willing for Psych Eval: ${formData.willingForPsychEval}
Willing to Sign Legal Agreement: ${formData.willingToSignLegalAgreement}
Preferred Arrangement: ${formData.preferredArrangement}
Available to Start: ${formData.availableToStart}
Partner Consent: ${formData.hasPartnerConsent}
Partner Name: ${formData.partnerName}

BACKGROUND & LIFESTYLE
${'─'.repeat(30)}
Education: ${formData.educationLevel}
Occupation: ${formData.occupation}
Employment Status: ${formData.employmentStatus}
Living Situation: ${formData.livingSituation}
Health Insurance: ${formData.hasHealthInsurance}

EMERGENCY CONTACT
${'─'.repeat(30)}
Name: ${formData.emergencyContactName}
Phone: ${formData.emergencyContactPhone}
Relationship: ${formData.emergencyContactRelationship}

Additional Info: ${formData.additionalInfo}
    `.trim();

    const data = new FormData();
    data.append('name', `${formData.firstName} ${formData.lastName}`);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('subject', 'Surrogate Application');
    data.append('message', body);
    data.append('website', '');

    try {
      const res = await fetch('mail.php', { method: 'POST', body: data });
      const contentType = res.headers.get('Content-Type') || '';
      if (!contentType.includes('application/json')) throw new Error('Unexpected server response.');
      const result = await res.json();
      if (result.success) {
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setErrors({ submit: result.message || 'Something went wrong. Please try again.' });
      }
    } catch {
      setErrors({ submit: 'Unable to submit. Please try again or contact us directly.' });
    } finally {
      setLoading(false);
    }
  };

  // ── Sub-components ──────────────────────────────────────────────
  const Field = ({ label, name, required, children }) => (
    <div className={`sf-field${errors[name] ? ' sf-field--error' : ''}`}>
      <label className="sf-label">
        {label}{required && <span className="sf-required"> *</span>}
      </label>
      {children}
      {errors[name] && <span className="sf-error-msg">{errors[name]}</span>}
    </div>
  );

  const Input = ({ name, type = 'text', placeholder }) => (
    <input
      className={`sf-input${errors[name] ? ' sf-input--error' : ''}`}
      type={type}
      name={name}
      value={formData[name]}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );

  const Select = ({ name, options, placeholder }) => (
    <select
      className={`sf-input sf-select${errors[name] ? ' sf-input--error' : ''}`}
      name={name}
      value={formData[name]}
      onChange={handleChange}
    >
      <option value="">{placeholder}</option>
      {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
    </select>
  );

  const RadioGroup = ({ name, options }) => (
    <div className="sf-radio-group">
      {options.map(o => (
        <label key={o.value} className={`sf-radio${formData[name] === o.value ? ' sf-radio--checked' : ''}`}>
          <input
            type="radio"
            name={name}
            value={o.value}
            checked={formData[name] === o.value}
            onChange={handleChange}
          />
          {o.label}
        </label>
      ))}
    </div>
  );

  return (
    <div className="sf-page">
      {/* Page header */}
      <div className="sf-page-header">
        <button className="sf-back-link" onClick={() => navigate(-1)} aria-label="Go back">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          Back
        </button>
        <div className="sf-page-title">
          <h1>Surrogate Application</h1>
          <p>Complete the form below to apply for our surrogacy programme. All information is strictly confidential.</p>
        </div>
      </div>

      <div className="sf-page-body">
        {/* Progress stepper */}
        <div className="sf-stepper">
          {stepConfig.map((s, i) => (
            <React.Fragment key={s.number}>
              <div className={`sf-step ${step === s.number ? 'sf-step--active' : ''} ${step > s.number ? 'sf-step--done' : ''}`}>
                <div className="sf-step-icon">
                  {step > s.number ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  ) : s.icon}
                </div>
                <div className="sf-step-meta">
                  <span className="sf-step-label">{s.label}</span>
                  <span className="sf-step-sublabel">{s.sublabel}</span>
                </div>
              </div>
              {i < stepConfig.length - 1 && <div className={`sf-step-connector ${step > s.number ? 'sf-step-connector--done' : ''}`} />}
            </React.Fragment>
          ))}
        </div>

        {/* Success state */}
        {submitted ? (
          <div className="sf-success">
            <div className="sf-success-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <h2>Application Submitted!</h2>
            <p>Thank you, <strong>{formData.firstName}</strong>. We have received your application and will review it within 3–5 business days. Check your email for confirmation.</p>
            <button className="sf-btn sf-btn--primary" onClick={() => navigate('/')}>
              Return to Home
            </button>
          </div>
        ) : (
          <form className="sf-form" onSubmit={handleSubmit} noValidate>

            {/* STEP 1 — Personal */}
            {step === 1 && (
              <div className="sf-section">
                <div className="sf-section-header">
                  <div className="sf-section-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="sf-section-title">Personal Information</h3>
                    <p className="sf-section-desc">Basic identity and contact details</p>
                  </div>
                </div>

                <div className="sf-grid sf-grid--2">
                  <Field label="First Name" name="firstName" required>
                    <Input name="firstName" placeholder="e.g. Amina" />
                  </Field>
                  <Field label="Last Name" name="lastName" required>
                    <Input name="lastName" placeholder="e.g. Okafor" />
                  </Field>
                </div>

                <div className="sf-grid sf-grid--2">
                  <Field label="Email Address" name="email" required>
                    <Input name="email" type="email" placeholder="you@example.com" />
                  </Field>
                  <Field label="Phone Number" name="phone" required>
                    <Input name="phone" type="tel" placeholder="+234 800 000 0000" />
                  </Field>
                </div>

                <div className="sf-grid sf-grid--2">
                  <Field label="Date of Birth" name="dateOfBirth" required>
                    <Input name="dateOfBirth" type="date" />
                  </Field>
                  <Field label="Nationality" name="nationality">
                    <Input name="nationality" placeholder="e.g. Nigerian" />
                  </Field>
                </div>

                <div className="sf-grid sf-grid--2">
                  <Field label="State of Residence" name="stateOfResidence" required>
                    <Input name="stateOfResidence" placeholder="e.g. Abuja (FCT)" />
                  </Field>
                  <Field label="City / LGA" name="city">
                    <Input name="city" placeholder="e.g. Garki" />
                  </Field>
                </div>

                <Field label="Marital Status" name="maritalStatus" required>
                  <Select name="maritalStatus" placeholder="Select status" options={[
                    { value: 'single', label: 'Single' },
                    { value: 'married', label: 'Married' },
                    { value: 'divorced', label: 'Divorced' },
                    { value: 'widowed', label: 'Widowed' },
                    { value: 'separated', label: 'Separated' },
                  ]} />
                </Field>
              </div>
            )}

            {/* STEP 2 — Medical */}
            {step === 2 && (
              <div className="sf-section">
                <div className="sf-section-header">
                  <div className="sf-section-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="sf-section-title">Medical & Health History</h3>
                    <p className="sf-section-desc">Health background and pregnancy history</p>
                  </div>
                </div>

                <div className="sf-grid sf-grid--3">
                  <Field label="Height (cm)" name="height">
                    <Input name="height" type="number" placeholder="e.g. 165" />
                  </Field>
                  <Field label="Weight (kg)" name="weight">
                    <Input name="weight" type="number" placeholder="e.g. 65" />
                  </Field>
                  <Field label="Blood Group" name="bloodGroup" required>
                    <Select name="bloodGroup" placeholder="Select" options={[
                      { value: 'A+', label: 'A+' }, { value: 'A-', label: 'A-' },
                      { value: 'B+', label: 'B+' }, { value: 'B-', label: 'B-' },
                      { value: 'AB+', label: 'AB+' }, { value: 'AB-', label: 'AB-' },
                      { value: 'O+', label: 'O+' }, { value: 'O-', label: 'O-' },
                    ]} />
                  </Field>
                </div>

                <Field label="Have you carried a pregnancy to term before?" name="hasCarriedBefore" required>
                  <RadioGroup name="hasCarriedBefore" options={[{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }]} />
                </Field>

                {formData.hasCarriedBefore === 'yes' && (
                  <div className="sf-grid sf-grid--2">
                    <Field label="Number of children" name="numberOfChildren" required>
                      <Input name="numberOfChildren" type="number" placeholder="e.g. 2" />
                    </Field>
                    <Field label="Ages of children" name="childrenAges">
                      <Input name="childrenAges" placeholder="e.g. 3, 7" />
                    </Field>
                  </div>
                )}

                <Field label="Did you have any complicated pregnancies?" name="hadComplicatedPregnancy">
                  <RadioGroup name="hadComplicatedPregnancy" options={[{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }]} />
                </Field>
                {formData.hadComplicatedPregnancy === 'yes' && (
                  <Field label="Please describe the complications" name="complicationDetails">
                    <textarea className="sf-input sf-textarea" name="complicationDetails" value={formData.complicationDetails} onChange={handleChange} placeholder="Brief description..." rows={3} />
                  </Field>
                )}

                <Field label="Do you have any chronic illness or medical condition?" name="hasChronicIllness">
                  <RadioGroup name="hasChronicIllness" options={[{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }]} />
                </Field>
                {formData.hasChronicIllness === 'yes' && (
                  <Field label="Please describe your condition(s)" name="illnessDetails">
                    <textarea className="sf-input sf-textarea" name="illnessDetails" value={formData.illnessDetails} onChange={handleChange} placeholder="Brief description..." rows={3} />
                  </Field>
                )}

                <Field label="Are you currently on any medication?" name="onMedication">
                  <RadioGroup name="onMedication" options={[{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }]} />
                </Field>
                {formData.onMedication === 'yes' && (
                  <Field label="Please list your medications" name="medicationDetails">
                    <Input name="medicationDetails" placeholder="e.g. Metformin 500mg" />
                  </Field>
                )}

                <div className="sf-grid sf-grid--2">
                  <Field label="Do you smoke?" name="smokes">
                    <RadioGroup name="smokes" options={[{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }]} />
                  </Field>
                  <Field label="Do you drink alcohol?" name="drinksAlcohol">
                    <RadioGroup name="drinksAlcohol" options={[{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }, { value: 'occasionally', label: 'Occasionally' }]} />
                  </Field>
                </div>
              </div>
            )}

            {/* STEP 3 — Surrogacy */}
            {step === 3 && (
              <div className="sf-section">
                <div className="sf-section-header">
                  <div className="sf-section-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="sf-section-title">Surrogacy Programme Details</h3>
                    <p className="sf-section-desc">Your intentions and readiness for the programme</p>
                  </div>
                </div>

                <Field label="Have you been a surrogate before?" name="hasBeenSurrogateBefore">
                  <RadioGroup name="hasBeenSurrogateBefore" options={[{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }]} />
                </Field>

                <Field label="Why do you want to become a surrogate?" name="motivationForSurrogacy" required>
                  <textarea
                    className={`sf-input sf-textarea${errors.motivationForSurrogacy ? ' sf-input--error' : ''}`}
                    name="motivationForSurrogacy"
                    value={formData.motivationForSurrogacy}
                    onChange={handleChange}
                    placeholder="Share your motivation in your own words..."
                    rows={4}
                  />
                </Field>

                <Field label="Preferred surrogacy arrangement" name="preferredArrangement">
                  <Select name="preferredArrangement" placeholder="Select" options={[
                    { value: 'gestational', label: 'Gestational (no genetic link)' },
                    { value: 'traditional', label: 'Traditional (genetic link)' },
                    { value: 'unsure', label: 'Not sure yet' },
                  ]} />
                </Field>

                <Field label="When are you available to start?" name="availableToStart" required>
                  <Select name="availableToStart" placeholder="Select" options={[
                    { value: 'immediately', label: 'Immediately' },
                    { value: '1_3_months', label: 'Within 1–3 months' },
                    { value: '3_6_months', label: 'Within 3–6 months' },
                    { value: '6_plus_months', label: '6+ months from now' },
                  ]} />
                </Field>

                <div className="sf-consent-block">
                  <div className="sf-consent-item">
                    <span className="sf-consent-label">Willing to undergo medical examination?</span>
                    <RadioGroup name="willingForMedicalExam" options={[{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }]} />
                    {errors.willingForMedicalExam && <span className="sf-error-msg">{errors.willingForMedicalExam}</span>}
                  </div>
                  <div className="sf-consent-item">
                    <span className="sf-consent-label">Willing to undergo psychological evaluation?</span>
                    <RadioGroup name="willingForPsychEval" options={[{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }]} />
                  </div>
                  <div className="sf-consent-item">
                    <span className="sf-consent-label">Willing to sign legal agreement?</span>
                    <RadioGroup name="willingToSignLegalAgreement" options={[{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }]} />
                    {errors.willingToSignLegalAgreement && <span className="sf-error-msg">{errors.willingToSignLegalAgreement}</span>}
                  </div>
                </div>

                <Field label="Do you have your partner's / spouse's consent?" name="hasPartnerConsent">
                  <RadioGroup name="hasPartnerConsent" options={[
                    { value: 'yes', label: 'Yes' },
                    { value: 'no', label: 'No' },
                    { value: 'na', label: 'Not Applicable' },
                  ]} />
                </Field>
                {formData.hasPartnerConsent === 'yes' && (
                  <Field label="Partner / Spouse Full Name" name="partnerName">
                    <Input name="partnerName" placeholder="Partner's full name" />
                  </Field>
                )}
              </div>
            )}

            {/* STEP 4 — Background */}
            {step === 4 && (
              <div className="sf-section">
                <div className="sf-section-header">
                  <div className="sf-section-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="sf-section-title">Lifestyle & Background</h3>
                    <p className="sf-section-desc">Occupational and household context</p>
                  </div>
                </div>

                <div className="sf-grid sf-grid--2">
                  <Field label="Highest Education Level" name="educationLevel">
                    <Select name="educationLevel" placeholder="Select" options={[
                      { value: 'no_formal', label: 'No Formal Education' },
                      { value: 'primary', label: 'Primary School' },
                      { value: 'secondary', label: 'Secondary (WAEC/NECO)' },
                      { value: 'ond_nce', label: 'OND / NCE' },
                      { value: 'hnd', label: 'HND' },
                      { value: 'bsc', label: "Bachelor's Degree" },
                      { value: 'postgraduate', label: 'Postgraduate' },
                      { value: 'vocational', label: 'Vocational / Technical' },
                    ]} />
                  </Field>
                  <Field label="Occupation" name="occupation">
                    <Input name="occupation" placeholder="e.g. Nurse, Teacher, Trader" />
                  </Field>
                </div>

                <div className="sf-grid sf-grid--2">
                  <Field label="Employment Status" name="employmentStatus">
                    <Select name="employmentStatus" placeholder="Select" options={[
                      { value: 'employed_full', label: 'Employed (Full-time)' },
                      { value: 'employed_part', label: 'Employed (Part-time)' },
                      { value: 'self_employed', label: 'Self-employed' },
                      { value: 'unemployed', label: 'Unemployed' },
                      { value: 'student', label: 'Student' },
                      { value: 'homemaker', label: 'Homemaker' },
                    ]} />
                  </Field>
                  <Field label="Living Situation" name="livingSituation">
                    <Select name="livingSituation" placeholder="Select" options={[
                      { value: 'own_home', label: 'Own Home' },
                      { value: 'renting', label: 'Renting' },
                      { value: 'with_family', label: 'Living with Family' },
                      { value: 'other', label: 'Other' },
                    ]} />
                  </Field>
                </div>

                <Field label="Do you have health insurance?" name="hasHealthInsurance">
                  <RadioGroup name="hasHealthInsurance" options={[{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }]} />
                </Field>

                <div className="sf-divider-section">
                  <span className="sf-divider-label">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" width="14" height="14">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.43 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.46a16 16 0 0 0 5.55 5.55l1.52-1.52a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 14.92z"/>
                    </svg>
                    Emergency Contact
                  </span>
                </div>

                <div className="sf-grid sf-grid--3">
                  <Field label="Contact Name" name="emergencyContactName" required>
                    <Input name="emergencyContactName" placeholder="Full name" />
                  </Field>
                  <Field label="Phone Number" name="emergencyContactPhone" required>
                    <Input name="emergencyContactPhone" type="tel" placeholder="+234 800 000 0000" />
                  </Field>
                  <Field label="Relationship" name="emergencyContactRelationship">
                    <Input name="emergencyContactRelationship" placeholder="e.g. Husband, Sister" />
                  </Field>
                </div>

                <Field label="Additional information (optional)" name="additionalInfo">
                  <textarea className="sf-input sf-textarea" name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} placeholder="Anything else relevant to your application..." rows={3} />
                </Field>

                <div className="sf-checkboxes">
                  <label className={`sf-checkbox${errors.agreeToTerms ? ' sf-checkbox--error' : ''}`}>
                    <input type="checkbox" name="agreeToTerms" checked={formData.agreeToTerms} onChange={handleChange} />
                    <span>I confirm that all information provided is true and accurate to the best of my knowledge.<span className="sf-required"> *</span></span>
                  </label>
                  {errors.agreeToTerms && <span className="sf-error-msg" style={{ paddingLeft: '1.75rem' }}>{errors.agreeToTerms}</span>}

                  <label className={`sf-checkbox${errors.agreeToPrivacy ? ' sf-checkbox--error' : ''}`}>
                    <input type="checkbox" name="agreeToPrivacy" checked={formData.agreeToPrivacy} onChange={handleChange} />
                    <span>I agree that my information will be handled confidentially in accordance with Surrogacy Consulting's Privacy Policy.<span className="sf-required"> *</span></span>
                  </label>
                  {errors.agreeToPrivacy && <span className="sf-error-msg" style={{ paddingLeft: '1.75rem' }}>{errors.agreeToPrivacy}</span>}
                </div>

                {errors.submit && (
                  <div className="sf-submit-error">⚠ {errors.submit}</div>
                )}
              </div>
            )}

            {/* Navigation */}
            <div className="sf-nav">
              <div className="sf-nav-left">
                {step > 1 && (
                  <button type="button" className="sf-btn sf-btn--ghost" onClick={prevStep}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
                      <polyline points="15 18 9 12 15 6"/>
                    </svg>
                    Back
                  </button>
                )}
              </div>
              <div className="sf-nav-right">
                <span className="sf-step-counter">Step {step} of {totalSteps}</span>
                {step < totalSteps ? (
                  <button type="button" className="sf-btn sf-btn--primary" onClick={nextStep}>
                    Continue
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  </button>
                ) : (
                  <button type="submit" className="sf-btn sf-btn--submit" disabled={loading}>
                    {loading ? <span className="sf-spinner" /> : (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
                        <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                    )}
                    {loading ? 'Submitting...' : 'Submit Application'}
                  </button>
                )}
              </div>
            </div>

          </form>
        )}
      </div>
    </div>
  );
};

export default SurrogateForm;