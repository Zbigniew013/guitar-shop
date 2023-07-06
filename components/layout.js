import Footer from './footer';
import Header from './header';

function Layout(props) {
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <div className='flex flex-col h-screen'>
          <div className='flex flex-col flex-grow'>
            <Header />
            {props.children}
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
