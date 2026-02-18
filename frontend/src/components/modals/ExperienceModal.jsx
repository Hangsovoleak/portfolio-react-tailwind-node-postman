import { useState, useEffect } from "react";
import Modal from "../Modal";

export default function ExperienceModal({ open, onClose, initialData, onSave }) {
    const [draft, setDraft] = useState({
        company: "",
        role: "",
        time: "",
        certificateUrl: "",
        bullets: "",
    });

    useEffect(() => {
        if (open) {
            if (initialData) {
                setDraft({
                    company: initialData.company || "",
                    role: initialData.role || "",
                    time: initialData.time || "",
                    certificateUrl: initialData.certificate || initialData.certificateUrl || "",
                    bullets: Array.isArray(initialData.bullets)
                        ? initialData.bullets.join("\n")
                        : initialData.bullets || "",
                });
            } else {
                setDraft({
                    company: "",
                    role: "",
                    time: "",
                    certificateUrl: "",
                    bullets: "",
                });
            }
        }
    }, [open, initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(draft);
    };

    return (
        <Modal
            open={open}
            title={initialData ? "Edit Experience" : "Add Experience"}
            onClose={onClose}
        >
            <form className="grid gap-3" onSubmit={handleSubmit}>
                <input
                    className="rounded-lg border border-slate-300 px-3 py-2"
                    placeholder="Company"
                    value={draft.company}
                    onChange={(e) =>
                        setDraft({ ...draft, company: e.target.value })
                    }
                    required
                />
                <input
                    className="rounded-lg border border-slate-300 px-3 py-2"
                    placeholder="Role"
                    value={draft.role}
                    onChange={(e) =>
                        setDraft({ ...draft, role: e.target.value })
                    }
                    required
                />
                <input
                    className="rounded-lg border border-slate-300 px-3 py-2"
                    placeholder="Time (e.g. May - Aug 2025)"
                    value={draft.time}
                    onChange={(e) =>
                        setDraft({ ...draft, time: e.target.value })
                    }
                    required
                />
                <input
                    className="rounded-lg border border-slate-300 px-3 py-2"
                    placeholder="Certificate URL (optional)"
                    value={draft.certificateUrl}
                    onChange={(e) =>
                        setDraft({ ...draft, certificateUrl: e.target.value })
                    }
                />
                <textarea
                    className="min-h-[120px] rounded-lg border border-slate-300 px-3 py-2"
                    placeholder="Bullets (one per line)"
                    value={draft.bullets}
                    onChange={(e) =>
                        setDraft({ ...draft, bullets: e.target.value })
                    }
                />

                <button
                    type="submit"
                    className="mt-2 rounded-lg bg-slate-900 px-4 py-2 font-semibold text-white hover:bg-slate-800"
                >
                    {initialData ? "Save Changes" : "Save"}
                </button>
            </form>
        </Modal>
    );
}
