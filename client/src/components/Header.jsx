import React from 'react';
import { Navbar, TextInput, Button } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
  return (
    <Navbar className='border-b-2'>
      <NavLink
        to='/'
        className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
        activeClassName='active' // Apply this class when active
      >
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
          BLOGIFY
        </span>
        Explore, Create, Inspire
      </NavLink>
      <form>
        <TextInput
          type='text'
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
        />
      </form>
      <Button className='w-12 h-10 lg:hidden' color='gray' pill>
        <AiOutlineSearch />
      </Button>

      <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
          <FaMoon />
        </Button>
        <NavLink to='/signin' activeClassName='active'>
          <Button gradientDuoTone='purpleToBlue' outline>
            Sign In
          </Button>
        </NavLink>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link as='div'>
          <NavLink to='/' activeClassName='active'>Home</NavLink>
        </Navbar.Link>
        <Navbar.Link as='div'>
          <NavLink to='/about' activeClassName='active'>About</NavLink>
        </Navbar.Link>
        <Navbar.Link as='div'>
          <NavLink to='/projects' activeClassName='active'>Projects</NavLink>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
