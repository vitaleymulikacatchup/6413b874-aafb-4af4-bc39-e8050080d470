"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Calendar, ChefHat, Clock, HelpCircle, MessageSquare, Star, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
      contentWidth="small"
      sizing="large"
      background="dotGrid"
      cardStyle="solid-bordered"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="glass"
      showBlurBottom="true"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Bella Italia"
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Authentic Italian Cuisine"
          description="Experience the true taste of Italy with our traditional recipes passed down through generations"
          tag="Benvenuti"
          tagIcon={Star}
          buttons={[
            { text: "View Menu", href: "menu" },
            { text: "Make Reservation", href: "contact" }
          ]}
          mediaItems={[
            {
              imageSrc: "https://images.pexels.com/photos/14965702/pexels-photo-14965702.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Bella Italia restaurant interior"
            },
            {
              imageSrc: "https://images.pexels.com/photos/5710181/pexels-photo-5710181.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Fresh Italian pasta"
            },
            {
              imageSrc: "https://images.pexels.com/photos/19260729/pexels-photo-19260729.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Traditional pizza margherita"
            },
            {
              imageSrc: "https://images.pexels.com/photos/11190139/pexels-photo-11190139.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Creamy Italian risotto"
            },
            {
              imageSrc: "https://images.pexels.com/photos/1959419/pexels-photo-1959419.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Classic tiramisu dessert"
            }
          ]}
        />
      </div>
      
      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Story"
          description={[
            "For over 30 years, Bella Italia has been serving authentic Italian cuisine in the heart of the city.",
            "Our family recipes, imported ingredients, and traditional cooking methods create an unforgettable dining experience that transports you straight to Italy."
          ]}
          buttons={[
            { text: "Learn More", href: "about" }
          ]}
          showBorder={true}
        />
      </div>
      
      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Our Signature Dishes"
          description="Discover our most beloved traditional Italian specialties"
          tag="Menu Highlights"
          tagIcon={ChefHat}
          features={[
            {
              title: "Spaghetti Carbonara",
              description: "Traditional Roman pasta with eggs, pecorino cheese, pancetta, and black pepper",
              imageSrc: "https://images.pexels.com/photos/5710181/pexels-photo-5710181.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Spaghetti Carbonara"
            },
            {
              title: "Pizza Margherita",
              description: "Classic Neapolitan pizza with San Marzano tomatoes, fresh mozzarella, and basil",
              imageSrc: "https://images.pexels.com/photos/19260729/pexels-photo-19260729.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Pizza Margherita"
            },
            {
              title: "Risotto ai Funghi",
              description: "Creamy Arborio rice with porcini mushrooms and Parmigiano-Reggiano",
              imageSrc: "https://images.pexels.com/photos/11190139/pexels-photo-11190139.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Mushroom Risotto"
            },
            {
              title: "Tiramisu",
              description: "Traditional Italian dessert with mascarpone, coffee, and ladyfingers",
              imageSrc: "https://images.pexels.com/photos/1959419/pexels-photo-1959419.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Tiramisu Dessert"
            },
            {
              title: "Bruschetta",
              description: "Toasted bread topped with fresh tomatoes, garlic, and basil",
              imageSrc: "https://images.pexels.com/photos/1438676/pexels-photo-1438676.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Bruschetta Appetizer"
            }
          ]}
          carouselMode="buttons"
        />
      </div>
      
      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="Why Choose Bella Italia"
          description="Numbers that speak for our commitment to excellence"
          tag="Our Impact"
          tagIcon={Award}
          metrics={[
            {
              id: "1",
              icon: Users,
              title: "Happy Customers",
              value: "10,000+"
            },
            {
              id: "2",
              icon: Star,
              title: "5-Star Reviews",
              value: "2,500+"
            },
            {
              id: "3",
              icon: Clock,
              title: "Years Experience",
              value: "30+"
            },
            {
              id: "4",
              icon: ChefHat,
              title: "Signature Dishes",
              value: "50+"
            }
          ]}
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Real experiences from our valued customers"
          tag="Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Maria Rodriguez",
              role: "Food Critic",
              company: "Culinary Weekly",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/12935085/pexels-photo-12935085.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Maria Rodriguez"
            },
            {
              id: "2",
              name: "Antonio Moretti",
              role: "Local Resident",
              company: "City Center",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/12574333/pexels-photo-12574333.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Antonio Moretti"
            },
            {
              id: "3",
              name: "Sarah Johnson",
              role: "Travel Blogger",
              company: "Foodie Adventures",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3184177/pexels-photo-3184177.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "4",
              name: "Giuseppe Ricci",
              role: "Restaurant Owner",
              company: "Italian Heritage",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5086619/pexels-photo-5086619.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Giuseppe Ricci"
            },
            {
              id: "5",
              name: "Emma Thompson",
              role: "Wine Enthusiast",
              company: "Sommelier Society",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6613044/pexels-photo-6613044.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emma Thompson"
            }
          ]}
        />
      </div>
      
      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Featured On"
          description="Recognized by leading food and travel platforms"
          tag="Press"
          tagIcon={Award}
          logos={[
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/7661590/pexels-photo-7661590.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/1437318/pexels-photo-1437318.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9182859/pexels-photo-9182859.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/267399/pexels-photo-267399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/18610082/pexels-photo-18610082.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={35}
          showCard={true}
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about dining with us"
          tag="Help"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "Do I need a reservation?",
              content: "While walk-ins are welcome, we highly recommend making a reservation, especially for dinner service and weekends. You can book online or call us directly."
            },
            {
              id: "2",
              title: "Do you accommodate dietary restrictions?",
              content: "Yes! We offer gluten-free pasta options, vegetarian dishes, and can accommodate most dietary needs. Please inform us when making your reservation."
            },
            {
              id: "3",
              title: "What are your hours?",
              content: "We're open Tuesday-Sunday: Lunch 12:00-15:00, Dinner 18:00-22:30. Closed Mondays for ingredient sourcing and preparation."
            },
            {
              id: "4",
              title: "Do you offer takeaway?",
              content: "Yes, we offer takeaway for most of our menu items. Some dishes are best enjoyed fresh in our restaurant, but our staff can recommend the best options for takeaway."
            },
            {
              id: "5",
              title: "Is there parking available?",
              content: "We have a small private parking lot behind the restaurant with 10 spaces. Additional street parking is available, and we validate parking at the nearby public garage."
            },
            {
              id: "6",
              title: "Do you have a wine list?",
              content: "Absolutely! We feature an extensive collection of Italian wines, from regional favorites to premium vintages. Our sommelier is happy to recommend pairings for your meal."
            }
          ]}
          animationType="smooth"
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Reserve"
          tagIcon={Calendar}
          title="Book Your Table Today"
          description="Join us for an authentic Italian dining experience. Make your reservation now or sign up for our newsletter to stay updated on special events and seasonal menus."
          inputPlaceholder="Enter your email"
          buttonText="Book Table"
          termsText="By booking you agree to our reservation policy and terms of service."
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Bella Italia"
          columns={[
            {
              items: [
                { label: "Menu", href: "menu" },
                { label: "Reservations", href: "contact" },
                { label: "Private Events", href: "events" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Story", href: "story" },
                { label: "Chef's Philosophy", href: "philosophy" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "contact" },
                { label: "Location", href: "location" },
                { label: "Hours", href: "hours" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}