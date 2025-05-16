import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/utils/supabase'; // Adjust the import path if needed
import Alert from '../extend/alert';
import { toast, ToastContainer } from '../extend/toast';

type Role = 'member' | 'player';
type Experience = 'beginner' | 'intermediate';

type AlertType = 'info' | 'success' | 'warning' | 'error';

const RugbyOnboardingForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<Role | ''>('');
  const [experience, setExperience] = useState<Experience | ''>('');
  const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState<{
    isOpen: boolean;
    message: string;
    type: AlertType;
  }>({
    isOpen: false,
    message: '',
    type: 'info',
  });

  const [formData, setFormData] = useState<any>({
    gender: '',
    imageUrl: 'https://i.postimg.cc/cJWcQdGc/dummy.jpg',
    name: '',
    surname: '',
    email: '',
    phone: '',
    altPhone: '',
    age: '', 
    experience: '',
    position: '',
    fitnessLevel: '',
    weight: '',
    approved: false,
  });

  /* const handleNext = () => setStep((prev) => prev + 1); */
  const handleBack = () => setStep((prev) => prev - 1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRoleSelection = (selectedRole: Role) => {
    setRole(selectedRole);
    setStep(2);
  };

  const handleExperienceSelection = (level: Experience) => {
    setExperience(level);
    setFormData({ ...formData, experience: level });
    setStep(3);
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    const basePayload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    };

    // Check for duplicates
    /* let existingUser; */
    if (role === 'member') {
      const { data, error } = await supabase
        .from('TurtleMembers')
        .select('*')
        .eq('email', formData.email)
        .maybeSingle();

      if (error) throw error;
      if (data) {
        toast("Duplicate!",  {
          type: "error",
          description: 'A member with this email already exists.',
        })
        setLoading(false);
        return;
      }

      const { error: insertError } = await supabase
        .from('TurtleMembers')
        .insert([basePayload]);
      if (insertError) throw insertError;

    } else if (role === 'player') {
      const { data, error } = await supabase
        .from('TurtlePlayers')
        .select('*')
        .eq('email', formData.email)
        .maybeSingle();

      if (error) throw error;
      if (data) {
        toast("Duplicate!",  {
        type: "error",
        description: 'You are trying to submit a duplicate entry',
        })
        setLoading(false);
        return;
      }

      const playerPayload = {
        ...basePayload,
        age: formData.age,
        altPhone: formData.altPhone,
        gender: formData.gender,
        imageUrl: formData.imageUrl,
        experience: experience,
        approved: formData.approved,
        position: formData.position,
        fitnessLevel: formData.fitnessLevel,
        weight: formData.weight,
      };

      const { error: insertError } = await supabase
        .from('TurtlePlayers')
        .insert([playerPayload]);
      if (insertError) throw insertError;

    } else {
      throw new Error('Invalid role selected');
    }

    toast("Success", {
      type: "success",
      description: 'Your now a part of the club'
    })
    setStep(1);
    setRole('');
    setExperience('');
    setFormData({});
  } catch (error: any) {
    console.error('Error submitting form:', error.message);
      toast("Error submitting form!",  {
        type: "error",
        description: error.message,
      })
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="form-bannerWrap">
      <div className="layouts joinClub">
    <form onSubmit={handleSubmit} id='onboardingForm' className='onboardingForm'>
      <h2>Community Onboarding</h2>
      {step === 1 && (
        <>
          <p>How would you like to join?</p>
          <div className='column gap-10'>
            <Link to="" onClick={() => handleRoleSelection('member')} className='cardSelect'>
                <div className='image-wrap'></div>
                <div className='gap-4 desc-wrap'>
                    <div className="ring"></div>
                    <h2>🧑‍🤝‍🧑</h2>
                    <span className='Text_L_Normal bold title'>Member</span>
                    <p className='desc Text_Normal'>A Member of the rugby community is someone who supports, contributes to, or participates in the community without actively playing on the field. Members play a crucial role in building the culture and spirit of the club.</p>
                    <p className='Text_Normal'><strong>Ideal for:</strong> Parents, fans, retired players, local supporters, or anyone passionate about rugby who wants to be involved off the field.</p>
                </div>
            </Link>
            <Link to="" onClick={() => handleRoleSelection('player')} className='cardSelect'>
                <div className='image-wrap'></div>                
                <div className='gap-4 desc-wrap'>
                    <div className="ring"></div>
                    <h2>🏉</h2>
                    <span className='Text_L_Normal bold title'>Player</span>
                    <p className='desc Text_Normal'>Players are Active participants in the sport they train, compete, and represent the club on the field.</p>                    
                    <p className='Text_Normal'><strong>Ideal for:</strong> Anyone who wants to learn or continue playing rugby, whether starting fresh or with prior experience.</p>
                </div>
            </Link>
            {/* <button type="button"></button> */}
          </div>
        </>
      )}

      {step === 2 && role === 'member' && (
        <div className='column gap-10'>        
        <div>
            <h3>Members</h3>
            <span className='description Text_Normal'> Please fill out the form with your actual legal Information.</span>
        </div>        
        <div className='column gap-10'>
            <div className='form-children-wrap'>
                <label>Full Name</label>
                <span className="Text_S_Normal description">This is your public Actual name. It cannot be a pseudonym.</span>
                <input type="text" name="name" placeholder='e.g John Doe' onChange={handleChange} required />
            </div>
            <div className='form-children-wrap'>
                <span>Email</span>
                <span className="Text_S_Normal description">You will receive club notices from the provided mail address.</span>
                <input type="email" name="email" placeholder='example@gmail.com' onChange={handleChange} required />
            </div>
            <div className='form-children-wrap'>
                <label>Phone</label>
                <span className="Text_S_Normal description">The club will contact you with the provided number</span>
                <input type="tel" name="phone" placeholder='0712345678' onChange={handleChange} />
            </div>
        </div>
        <div className='row gap-4'>
            <button type="button" onClick={handleBack}>Back</button>
            <button type="submit" className='button--accent' disabled={loading}>
              {loading ? 'Submitting...' : 'Submit'}
            </button>
        </div>
          <Alert
            type={alert.type}
            message={alert.message}
            isOpen={alert.isOpen}
            onClose={() => setAlert(prev => ({ ...prev, isOpen: false }))}
          />
        </div>
      )}

      {step === 2 && role === 'player' && (
        <div className='column gap-10'>
            <div className='column'>
                <h3>Player Experience</h3>
                <p>What's your level of experience in Rugby?</p>
            </div>
            <div className='column gap-10'>
                <Link to="" onClick={() => handleExperienceSelection('beginner')} className='cardSelect'>
                    <div className='image-wrap'></div>
                    <div className='gap-4 desc-wrap'>
                        <div className="ring"></div>
                        <span className='Text_L_Normal bold title'>Beginner</span>
                        <p className='desc Text_Normal'>A Beginner is new to rugby and may have little to no experience playing the sport. They’re joining to learn the basics, understand the rules, and develop foundational skills in a supportive environment.</p>
                        <p className="blockquote">"I’m new to rugby and want to learn how to play."</p>
                    </div>
                </Link>
                <Link to="" onClick={() => handleExperienceSelection('intermediate')} className='cardSelect'>
                    <div className='image-wrap'></div>
                    <div className='gap-4 desc-wrap'>
                        <div className="ring"></div>
                        <span className='Text_L_Normal bold title'>Intermediate</span>
                        <p className='desc Text_Normal'>An Intermediate player has prior experience with rugby. They understand the rules, have played before, and may already know their preferred position. They’re looking to improve their skills and compete at a higher level.</p>
                        <p className='blockquote'>"I’ve played before and know the position I prefer on the field."</p>
                    </div>
                </Link>
            </div>
            <button type="button" className='button--default' onClick={handleBack}>Back</button>
        </div>
      )}

      {step === 3 && role === 'player' && (
        <div className='column gap-20'>
          <h3>Player Info ({experience})</h3>
            <div className='form-children-wrap'>
              <label>Gender</label>
              <span className='description Text_S_Normal'>your actual gender.</span>
              <select name="gender" onChange={handleChange}>
                <option value="">-- Select Gender --</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
              </select>
            </div>
          <div className='form-children-wrap'>
            {/* <label>Names</label> */}
            <div className='row gap-10'>
              <div className='column gap-4'>
                <span className=''>First Name</span>
                <input type="text" name="name" placeholder='e.g john' onChange={handleChange} required />                
              </div>
              <div className='column gap-4'>
                <span className=''>Surname Name</span>
                <input type="text" name="surname" placeholder='e.g Doe' onChange={handleChange} required />
              </div>
            </div>
          </div>
          <div className='form-children-wrap'>
            <label>Email</label>
            <span className='description Text_S_Normal'>You will receive club notices from the provided mail address.</span>
            <input type="email" name="email" placeholder='e.g example@gmail.com' onChange={handleChange} required />
          </div>
          <div className='form-children-wrap'>
            <label>Phone Number</label>
            <span className='description Text_S_Normal'>You will receive club notices from the provided mail address.</span>
            <input type="tel" name="tel" placeholder='0712345678' required />
          </div>
          <div className='form-children-wrap'>
            <label>Guardian / Parent: Phone Number</label>
            <span className='description Text_S_Normal'>You will receive club notices from the provided mail address.</span>
            <input type="tel" name="tel" placeholder='0712345678' required />
          </div>
          <div className='form-children-wrap'>
            <label>Date of Birth</label>
            <span className='description Text_S_Normal'>In alignment to our sdgs - We consent to protect minors and youth from all types of physical or mental harm</span>
            <input type="date" name="age" onChange={handleChange} required />
          </div>
          <div className='form-children-wrap'>
            <label>Weight</label>
            <span className='description Text_S_Normal'>Weight in Kilograms</span>
            <input type="text" name="weight" onChange={handleChange} required />
          </div>

          {experience === 'intermediate' && (
            <div className='form-children-wrap'>
              <label>Position</label>
              <span className='description Text_S_Normal'>Your preferred position of play</span>
              <select name="position" onChange={handleChange}>
                <option value="">-- Select Position --</option>
                <option value="Prop">Prop</option>
                <option value="Hooker">Hooker</option>
                <option value="Lock">Lock</option>
                <option value="Flanker">Flanker</option>
                <option value="Scrum-half">Scrum-half</option>
                <option value="Fly-half">Fly-half</option>
                <option value="Centre">Centre</option>
                <option value="Winger">Winger</option>
                <option value="Full-back">Full-back</option>
              </select>
            </div>
          )}
          <div className='form-children-wrap'>
            <label>Fitness Level</label>
              <span className='description Text_S_Normal'>Your current fitness level</span>
            <select name="fitnessLevel" onChange={handleChange}>
              <option value="">-- Select --</option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </select>
          </div>
          <div className='row gap-4'>
              <button type="button" onClick={handleBack}>Back</button>
              <button type="submit" className='button--accent' disabled={loading}>
                {loading ? 'Submitting...' : 'Submit'}
              </button>
          </div>          
        </div>
      )}
    </form>
    </div>
    <ToastContainer />
    </div>
  );
};

export default RugbyOnboardingForm;
