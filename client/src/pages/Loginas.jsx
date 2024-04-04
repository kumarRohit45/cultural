import React, { useState } from 'react';
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";

export default function Loginas() {
  const [loginType, setLoginType] = useState('USER'); // Default to USER form

  const handleLoginTypeChange = (type) => {
    setLoginType(type);
  };

  return (
    <div className='flex flex-col items-center justify-center h-full bg-gray-100 py-8'>
      <div className='w-full max-w-lg p-4 mb-8 border border-gray-200 rounded-lg shadow-md'>
        <div className="flex justify-between">
          <Button type="button" onClick={() => handleLoginTypeChange('USER')} className={loginType === 'USER' ? 'bg-blue-500 text-white px-4 py-2 rounded' : 'text-gray-700 px-4 py-2 rounded hover:bg-gray-200'}>
            Login as USER
          </Button>
          <Button type="button" onClick={() => handleLoginTypeChange('PARTNER')} className={loginType === 'PARTNER' ? 'bg-blue-500 text-white px-4 py-2 rounded' : 'text-gray-700 px-4 py-2 rounded hover:bg-gray-200'}>
            Login as PARTNER
          </Button>
        </div>
      </div>
      <Card className="w-[500px] bg-white shadow-md rounded-lg p-8">
        <form className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">Login</h2>
          <div>
            <Label htmlFor="text" value={`Login as ${loginType}`} className="text-lg font-semibold text-gray-800" />
          </div>
          <div>
            <Label htmlFor="email1" value="Your email" className="text-sm font-semibold text-gray-800" />
            <TextInput id="email1" type="email" placeholder="Enter your email" required />
          </div>
          <div>
            <Label htmlFor="password1" value="Your password" className="text-sm font-semibold text-gray-800" />
            <TextInput id="password1" type="password" placeholder='Enter Password' required />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" className="rounded" />
            <Label htmlFor="remember" className="text-sm font-semibold text-gray-800">Remember me</Label>
          </div>
          <Button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 rounded transition duration-300">Submit</Button>
        </form>
      </Card>
    </div>
  );
}
