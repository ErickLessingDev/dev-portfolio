"use client"
import React, { useState, useEffect } from 'react';

import { 
    AmazonwebservicesPlainWordmark, 
    HerokuPlainWordmark, 
    FirebasePlainWordmark, 
    CsharpLine,
    FigmaPlain,
    GitPlainWordmark, 
    JavaPlainWordmark,
    JavascriptPlain,
    JenkinsLine,
    JiraPlainWordmark,
    LinuxPlain,
    MysqlPlainWordmark, 
    PostgresqlPlainWordmark,
    PostmanPlainWordmark,
    RubyPlainWordmark,
    RailsPlainWordmark,
    SqlitePlainWordmark,
    TypescriptPlain,
    NextjsPlain,
    TailwindcssPlainWordmark,
    AxiosPlainWordmark,
    NodejsPlainWordmark,
    EslintPlainWordmark,
    SonarqubePlainWordmark
    } from 'devicons-react';

const TechStack = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    window.addEventListener('resize', handleResize);

    // Initial check for mobile/desktop
    handleResize();

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Define the list of icons
  const iconList = [
    AmazonwebservicesPlainWordmark,
    HerokuPlainWordmark,
    FirebasePlainWordmark,
    CsharpLine,
    FigmaPlain,
    GitPlainWordmark, 
    JavaPlainWordmark,
    JavascriptPlain,
    JenkinsLine,
    JiraPlainWordmark,
    LinuxPlain,
    MysqlPlainWordmark, 
    PostgresqlPlainWordmark,
    PostmanPlainWordmark,
    RubyPlainWordmark,
    RailsPlainWordmark,
    SqlitePlainWordmark,
    TypescriptPlain,
    NextjsPlain,
    TailwindcssPlainWordmark,
    AxiosPlainWordmark,
    NodejsPlainWordmark,
    EslintPlainWordmark,
    SonarqubePlainWordmark
  ];

  return (
    <div className={`grid ${isMobile ? "grid-cols-3" : "grid-cols-4"} gap-8 md:gap-5 w-full justify-items-center items-center mt-8`}>
      {iconList.map((Icon, index) => (
        <Icon key={index} color="white" size={isMobile ? 50 : 80} className="svg-shadow" />
      ))}
    </div>
  );
}

export default TechStack;
