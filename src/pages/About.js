import { lazy, Suspense } from "react";
const LazyMap = lazy(() => import("../components/About/Map/script"));

const About = () => {
  return (
    <>
      <article className="container py-5">
        <h1 className="text-center prose ">About</h1>
        <section>
          <p>
            Welcome to [Your Travel Website Name], your gateway to unforgettable
            journeys and travel experiences. At [Your Travel Website Name], we
            are passionate about exploring the world and making travel dreams
            come true. Our mission is to inspire, inform, and assist travelers
            of all kinds, whether you're an adventurous globetrotter, a
            leisurely vacationer, or someone seeking the perfect getaway.
          </p>
        </section>
        <section>
          <h2>Our Story</h2>
          <p>
            [Your Travel Website Name] was founded with a deep love for travel
            and a desire to share the beauty of the world with fellow
            adventurers. Our journey began when a group of avid travelers came
            together to create a platform that would provide valuable
            information, expert advice, and insider tips for anyone looking to
            embark on a journey of their own. What started as a simple idea soon
            evolved into a comprehensive resource for travel enthusiasts, with a
            commitment to making travel accessible and enjoyable for all.
          </p>
        </section>
        <section>
          <h2>Our Mission</h2>
          <p>
            At [Your Travel Website Name], our mission is to provide travelers
            with the tools and inspiration they need to plan their perfect trip.
            We believe that travel has the power to transform lives, broaden
            horizons, and create lasting memories. We are dedicated to:
          </p>
          <ul>
            <li>
              Inspiring wanderlust: We showcase breathtaking destinations, share
              captivating stories, and curate travel guides that ignite your
              passion for exploration.
            </li>
            <li>
              Providing expert guidance: Our team of experienced travelers and
              writers offer practical advice, travel tips, and recommendations
              to help you navigate the world confidently.
            </li>
            <li>
              Promoting responsible travel: We advocate for sustainable and
              responsible travel practices to protect our planet and its diverse
              cultures.
            </li>
            <li>
              Celebrating diversity: We embrace the richness of cultural
              diversity and highlight destinations from around the globe,
              encouraging inclusivity and cultural appreciation.
            </li>
          </ul>
        </section>
        <section>
          <h2>What Sets Us Apart</h2>
          <p>
            [Your Travel Website Name] stands out from the crowd because of our
            commitment to quality, authenticity, and the genuine passion we have
            for travel. Here are a few reasons why travelers turn to us:
          </p>
        </section>
        <section>
          <h2>Get in Touch</h2>
          <p>
            Whether you're planning your first solo adventure, a romantic
            getaway, a family vacation, or a group expedition, [Your Travel
            Website Name] is here to help. We believe that every journey is a
            story waiting to be told, and we're excited to be a part of your
            travel narrative. Contact us with any questions, feedback, or
            partnership inquiries, and let us join you on your travel adventure.
          </p>
          <Suspense fallback={<span>Loading...</span>}>
            <LazyMap />
          </Suspense>
        </section>
      </article>
    </>
  );
};

export default About;
