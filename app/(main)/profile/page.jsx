"use client";
import { useUser, useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";
import { LogOut, Mail, User, Zap } from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const ProfilePage = () => {
  const { user, isLoaded } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.push("/");
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FDFCFE] to-[#F5F3FF] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#AB9FF2] mx-auto"></div>
          <p className="mt-4 text-[#504688]">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FDFCFE] to-[#F5F3FF] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#504688] text-lg">No user found. Please sign in.</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-[#FDFCFE] to-[#F5F3FF] py-12 px-4 md:px-8"
      style={{
        backgroundImage: "radial-gradient(circle, #AB9FF2 1px, transparent 1px)",
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0, 20px 20px"
      }}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#504688] mb-12">My Profile</h1>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-max"
        >
          <motion.div variants={item} className="md:col-span-2 md:row-span-2 bg-white/40 backdrop-blur-md border border-white/60 rounded-3xl shadow-lg p-8 flex flex-col items-center justify-center text-center">
            <img
              src={user.imageUrl}
              alt={user.fullName}
              className="w-32 h-32 rounded-full object-cover border-4 border-[#AB9FF2] shadow-lg mb-6"
            />
            <h2 className="text-3xl font-bold text-[#504688] mb-2">
              {user.fullName || "User"}
            </h2>
            <p className="text-[#504688] opacity-75">Account Owner</p>
          </motion.div>

          <motion.div variants={item} className="md:col-span-2 bg-white/40 backdrop-blur-md border border-white/60 rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <Mail size={20} className="text-[#AB9FF2]" />
              <p className="text-sm text-[#504688] opacity-75">Email</p>
            </div>
            <p className="text-lg font-semibold text-[#504688] break-all">
              {user.primaryEmailAddress?.emailAddress}
            </p>
          </motion.div>

          <motion.div variants={item} className="md:col-span-2 bg-gradient-to-br from-[#AB9FF2] to-[#8B7FE8] rounded-3xl shadow-lg p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <Zap size={24} />
              <p className="text-sm opacity-90">Total Credits</p>
            </div>
            <p className="text-5xl font-bold">1,500</p>
          </motion.div>

          <motion.div variants={item} className="bg-white/40 backdrop-blur-md border border-white/60 rounded-2xl shadow-lg p-6">
            <p className="text-sm text-[#504688] opacity-75 mb-2">Used This Month</p>
            <p className="text-3xl font-bold text-[#504688]">250</p>
          </motion.div>

          <motion.div variants={item} className="bg-white/40 backdrop-blur-md border border-white/60 rounded-2xl shadow-lg p-6">
            <p className="text-sm text-[#504688] opacity-75 mb-2">Remaining</p>
            <p className="text-3xl font-bold text-[#504688]">1,250</p>
          </motion.div>

          <motion.div variants={item} className="bg-white/40 backdrop-blur-md border border-white/60 rounded-2xl shadow-lg p-6">
            <p className="text-sm text-[#504688] opacity-75 mb-2">Renewal</p>
            <p className="text-2xl font-bold text-[#504688]">May 19</p>
          </motion.div>

          <motion.div variants={item} className="bg-white/40 backdrop-blur-md border border-white/60 rounded-2xl shadow-lg p-6">
            <p className="text-sm text-[#504688] opacity-75 mb-2">Created</p>
            <p className="text-lg font-semibold text-[#504688]">
              {new Date(user.createdAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric"
              })}
            </p>
          </motion.div>

          <motion.div variants={item} className="md:col-span-2 bg-white/40 backdrop-blur-md border border-white/60 rounded-2xl shadow-lg p-6">
            <p className="text-sm text-[#504688] opacity-75 mb-2">Last Sign In</p>
            <p className="text-lg font-semibold text-[#504688]">
              {new Date(user.lastSignInAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit"
              })}
            </p>
          </motion.div>

          <motion.button
            variants={item}
            onClick={handleLogout}
            className="md:col-span-4 bg-red-600 text-white font-semibold flex items-center justify-center gap-2 transition-colors duration-300 py-2 border-3 border-red-400 rounded-2xl"
          >
            <LogOut size={20} />
            Log Out
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfilePage;