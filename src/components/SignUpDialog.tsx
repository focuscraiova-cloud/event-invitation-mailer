import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

interface SignUpDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SignUpDialog = ({ open, onOpenChange }: SignUpDialogProps) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);

    toast({
      title: "You're on the list!",
      description: "We'll notify you when tickets go on sale.",
    });

    setEmail("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-black/95 border border-white/20 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bebas tracking-wider text-center text-orange-400">
            BE THE FIRST TO KNOW
          </DialogTitle>
          <DialogDescription className="text-gray-400 text-center">
            Sign up to get exclusive updates and early access to tickets for Christmas Flashbacks.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/10 border-white/30 text-white placeholder:text-gray-500 focus:border-orange-400"
            required
          />
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold uppercase tracking-wider"
          >
            {loading ? "Signing up..." : "Notify Me"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SignUpDialog;
