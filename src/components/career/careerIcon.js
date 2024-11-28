import { Award, Briefcase, GraduationCap, Star } from "lucide-react";
import React from "react";

export const CareerIcon = ({ type }) => {
  switch (type) {
    case "work":
      return <Briefcase className="w-6 h-6" />;
    case "education":
      return <GraduationCap className="w-6 h-6" />;
    case "achievement":
      return <Award className="w-6 h-6" />;
    default:
      return <Star className="w-6 h-6" />;
  }
};
