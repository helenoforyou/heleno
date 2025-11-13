import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import HowItWorks from "./components/home/HowItWorks";
import { AuthContext } from "./context/AuthContext";
import DashboardLayout from "./layouts/DashboardLayout";
import PublicLayout from "./layouts/PublicLayout";
import SettingsLayout from "./layouts/SettingsLayout";
import ConnectionsPage from "./pages/dashboard/ConnectionsPage";
import ExplorePage from "./pages/dashboard/ExplorePage";
import FeedPage from "./pages/dashboard/FeedPage";
import HomePage from "./pages/dashboard/HomePage";
import MessagesPage from "./pages/dashboard/MessagesPage";
import NotificationsPage from "./pages/dashboard/NotificationsPage";
import ProfilePage from "./pages/dashboard/ProfilePage";
import SearchPage from "./pages/dashboard/SearchPage";
import AboutUs from "./pages/public/AboutUs";
import Home from "./pages/public/Home";
import OurStory from "./pages/public/OurStory";
import Safety from "./pages/public/Safety";
import Account from "./pages/settings/Account";
import Appearance from "./pages/settings/Appearance";
import Emails from "./pages/settings/Emails";
import PasswordAndSecurity from "./pages/settings/PasswordAndSecurity";
import Profile from "./pages/settings/Profile";
import ScheduledReminders from "./pages/settings/ScheduledReminders";
import Sessions from "./pages/settings/Sessions";
import ProtectedRoute from "./routes/ProtectedRoutes";
import ScrollToTop from "./utils/ScrollToTop";

const App: React.FC = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div>
      <ScrollToTop />
      <Routes>
        {!isAuthenticated && (
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="safety" element={<Safety />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="our-story" element={<OurStory />} />
            <Route path="how-it-works" element={<HowItWorks />} />
          </Route>
        )}
        {isAuthenticated && (
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<DashboardLayout />}>
              <Route index element={<HomePage />} />
              <Route path="find" element={<SearchPage />} />
              <Route path="feed" element={<FeedPage />} />
              <Route path="explore" element={<ExplorePage />} />
              <Route path="notifications" element={<NotificationsPage />} />
              <Route path="connections" element={<ConnectionsPage />} />
              <Route path="messages" element={<MessagesPage />} />
              <Route path="helenoforyou" element={<ProfilePage />} />
            </Route>

            <Route path="/settings/" element={<SettingsLayout />}>
              <Route index element={<Profile />} />
              <Route path="profile" element={<Profile />} />
              <Route path="account" element={<Account />} />
              <Route path="appearance" element={<Appearance />} />
              <Route path="accessibility" element={<Accessibility />} />
              <Route path="notifications" element={<Notifications />} />
              <Route path="billing" element={<Billing />} />
              <Route path="emails" element={<Emails />} />
              <Route path="security" element={<PasswordAndSecurity />} />
              <Route path="sessions" element={<Sessions />} />
              <Route path="moderation" element={<Moderation />} />
              <Route path="security-analysis" element={<YourSecurity />} />
              <Route path="reminders" element={<ScheduledReminders />} />
              <Route path="security-log" element={<SecurityLog />} />
              <Route path="sponsorship-log" element={<SponsorshipLog />} />
            </Route>
            <Route path="/testimonials/" element={<Pages />} />
          </Route>
        )}
      </Routes>
    </div>
  );
};

export default App;

const Accessibility = () => {
  return (
    <div className="flex items-center justify-center h-full text-5xl font-bold">
      Accessibility
    </div>
  );
};

const Notifications = () => {
  return (
    <div className="flex items-center justify-center h-full text-5xl font-bold">
      Notifications
    </div>
  );
};

const Billing = () => {
  return (
    <div className="flex items-center justify-center h-full text-5xl font-bold">
      Billing and Licensing
    </div>
  );
};

const Moderation = () => {
  return (
    <div className="flex items-center justify-center h-full text-5xl font-bold">
      Moderation
    </div>
  );
};

const Pages = () => {
  return (
    <div className="flex items-center justify-center h-full text-5xl font-bold">
      Pages
    </div>
  );
};

const YourSecurity = () => {
  return (
    <div className="flex items-center justify-center h-full text-5xl font-bold">
      Code Security
    </div>
  );
};

const SecurityLog = () => {
  return (
    <div className="flex items-center justify-center h-full text-5xl font-bold">
      Security Log
    </div>
  );
};

const SponsorshipLog = () => {
  return (
    <div className="flex items-center justify-center h-full text-5xl font-bold">
      Sponsorship Log
    </div>
  );
};
