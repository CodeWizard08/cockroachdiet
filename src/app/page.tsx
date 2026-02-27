import CustomCursor from "./components/CustomCursor";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import BookDescription from "./components/BookDescription";
import Pillars from "./components/Pillars";
import StartedGrid from "./components/StartedGrid";
import Quote from "./components/Quote";
import Author from "./components/Author";
import Ecosystem from "./components/Ecosystem";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import Divider from "./components/Divider";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Nav />
      <Hero />
      <Divider />
      <BookDescription />
      <Divider />
      <Pillars />
      <StartedGrid />
      <Quote />
      <Author />
      <Ecosystem />
      <Signup />
      <Footer />
    </>
  );
}
