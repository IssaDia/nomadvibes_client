// src/layouts/MainLayout.tsx
import React, { useEffect } from "react";
import { Layout } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../designSystem/Header";
import { useAuth } from "../../store/auth/AuthContext";
import { links } from "../../routes/routeConfig";

const { Footer, Content } = Layout;

const MainLayout: React.FC = () => {
  const { isAuthenticated, user, setUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const userData = {
          id: 1,
          name: "John Doe",
          email: "johndoe@me.com",
        };
        setUser(userData);
      } catch (error) {
        console.error(error);
        navigate("/login");
      }
    }
  }, [navigate, setUser]);

  return (
    <div className="main-layout">
      <Layout className="flex flex-col min-h-screen">
        <Header
          brand="Nomad Vibes."
          links={links}
          title="Pack your stuff and join an activity now."
          isAuthenticated={isAuthenticated}
          backgroundImage="/images/wallpaper_nomad_vibes.png"
          onLogout={() => navigate("/login")}
        />
        <Content className="flex-grow">
          <main>
            <Outlet />
          </main>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </div>
  );
};

export default MainLayout;
