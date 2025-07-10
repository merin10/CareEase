import React, { useState } from 'react';

const CareEaseAuth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [selectedRole, setSelectedRole] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [passwordMatch, setPasswordMatch] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Check password match for confirm password
    if (name === 'confirmPassword') {
      if (value === '') {
        setPasswordMatch('');
      } else if (value === formData.password) {
        setPasswordMatch('✓ Passwords match');
      } else {
        setPasswordMatch('✗ Passwords do not match');
      }
    }
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  const handleLoginSubmit = () => {
    if (!formData.email || !formData.password) {
      alert('Please fill in all fields');
      return;
    }
    
    // Here you would typically send the data to your backend
    alert(`Login attempt:\nEmail: ${formData.email}\nPassword: ${formData.password}`);
  };

  const handleSignupSubmit = () => {
    if (!selectedRole) {
      alert('Please select your role (Caregiver or Patient)');
      return;
    }
    
    if (!formData.email || !formData.password || !formData.confirmPassword) {
      alert('Please fill in all fields');
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    // Here you would typically send the data to your backend
    alert(`Sign up attempt:\nRole: ${selectedRole}\nEmail: ${formData.email}\nPassword: ${formData.password}`);
  };

  const switchToLogin = () => {
    setIsLogin(true);
    setFormData({ email: '', password: '', confirmPassword: '' });
    setSelectedRole('');
    setPasswordMatch('');
  };

  const switchToSignup = () => {
    setIsLogin(false);
    setFormData({ email: '', password: '', confirmPassword: '' });
    setSelectedRole('');
    setPasswordMatch('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-md border border-gray-100">
        
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl text-white">🏥</span>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            CareEase
          </h1>
          <p className="text-gray-600 text-lg">Connecting care with ease</p>
        </div>

        {/* Login Form */}
        {isLogin ? (
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-3 text-lg">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:bg-white focus:outline-none transition-all duration-300 text-lg"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-3 text-lg">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:bg-white focus:outline-none transition-all duration-300 text-lg"
              />
            </div>
            
            <button
              onClick={handleLoginSubmit}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-2xl font-medium text-xl hover:from-blue-600 hover:to-purple-700 hover:transform hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              Sign In 🚀
            </button>
            
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4 text-lg">Don't have an account?</p>
              <button
                onClick={switchToSignup}
                className="text-blue-600 font-medium hover:text-blue-700 hover:underline transition-colors text-lg bg-blue-50 px-6 py-2 rounded-2xl hover:bg-blue-100"
              >
                Create Account ✨
              </button>
            </div>
          </div>
        ) : (
          /* Sign Up Form */
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-4 text-lg">
                I am a:
              </label>
              <div className="grid grid-cols-2 gap-4">
                <div
                  onClick={() => handleRoleSelect('caregiver')}
                  className={`p-6 border-2 rounded-2xl text-center cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                    selectedRole === 'caregiver'
                      ? 'border-blue-500 bg-blue-500 text-white shadow-lg ring-4 ring-blue-300'
                      : 'border-gray-200 bg-gray-50 hover:border-blue-300 hover:bg-white hover:shadow-md'
                  }`}
                >
                  <div className="text-4xl mb-3">👩‍⚕️</div>
                  <div className="font-medium text-lg">Caregiver</div>
                </div>
                <div
                  onClick={() => handleRoleSelect('patient')}
                  className={`p-6 border-2 rounded-2xl text-center cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                    selectedRole === 'patient'
                      ? 'border-blue-500 bg-blue-500 text-white shadow-lg ring-4 ring-blue-300'
                      : 'border-gray-200 bg-gray-50 hover:border-blue-300 hover:bg-white hover:shadow-md'
                  }`}
                >
                  <div className="text-4xl mb-3">🤗</div>
                  <div className="font-medium text-lg">Patient</div>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-3 text-lg">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:bg-white focus:outline-none transition-all duration-300 text-lg"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-3 text-lg">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Create a password"
                className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:bg-white focus:outline-none transition-all duration-300 text-lg"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-3 text-lg">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Re-enter your password"
                className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:bg-white focus:outline-none transition-all duration-300 text-lg"
              />
              {passwordMatch && (
                <div className={`text-lg mt-3 font-medium px-4 py-2 rounded-xl ${
                  passwordMatch.includes('✓') 
                    ? 'text-green-600 bg-green-50' 
                    : 'text-red-500 bg-red-50'
                }`}>
                  {passwordMatch}
                </div>
              )}
            </div>
            
            <button
              onClick={handleSignupSubmit}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-2xl font-medium text-xl hover:from-blue-600 hover:to-purple-700 hover:transform hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              Create Account 🎉
            </button>
            
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4 text-lg">Already have an account?</p>
              <button
                onClick={switchToLogin}
                className="text-blue-600 font-medium hover:text-blue-700 hover:underline transition-colors text-lg bg-blue-50 px-6 py-2 rounded-2xl hover:bg-blue-100"
              >
                Sign In 👋
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CareEaseAuth;