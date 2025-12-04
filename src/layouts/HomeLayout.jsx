import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import RightAside from '../components/homelayout/RightAside';
import LeftAside from '../components/homelayout/LeftAside';



const HomeLayout = () => {
    return (
        <div>
            <header>

          <Header></Header>
          

          <section>
            <LatestNews></LatestNews>
          </section>

          <section>
              <Navbar></Navbar>
          </section>

            </header>
          
          

            <main className='mx-auto w-10/12 my-3 grid grid-cols-12'>
                <section className="left-nav col-span-3">
                    <aside>
                        <LeftAside></LeftAside>
                    </aside>

                </section>
                <section className="main col-span-6">
                    <Outlet></Outlet>
                </section>

                <section className="right-nav col-span-3">
                    <aside>
                        <RightAside></RightAside>
                    </aside>
                </section>
            </main>
        </div>
    );
};

export default HomeLayout;