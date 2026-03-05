import { useState, useEffect } from "react";
import Modal from "../Modal";

export default function ExperienceModal({ open, onClose, initialData, onSave }) {
    const [draft, setDraft] = useState({
        company: "",
        role: "",
        period: "",
        logoUrl: "",
        description: "",
    });

    useEffect(() => {
        if (open) {
            if (initialData) {
                setDraft({
                    company: initialData.company || "",
                    role: initialData.role || "",
                    period: initialData.period || "",
                    logoUrl: initialData.logoUrl || "",
                    description: initialData.description || "",
                });
            } else {
                setDraft({
                    company: "",
                    role: "",
                    period: "",
                    logoUrl: "",
                    description: "",
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
                    placeholder="Company..."
                    value={draft.company}
                    onChange={(e) =>
                        setDraft({ ...draft, company: e.target.value })
                    }
                    required
                />
                <input
                    className="rounded-lg border border-slate-300 px-3 py-2"
                    placeholder="Role..."
                    value={draft.role}
                    onChange={(e) =>
                        setDraft({ ...draft, role: e.target.value })
                    }
                    required
                />
                <input
                    className="rounded-lg border border-slate-300 px-3 py-2"
                    placeholder="Time..."
                    value={draft.period}
                    onChange={(e) =>
                        setDraft({ ...draft, period: e.target.value })
                    }
                    required
                />
                <input
                    className="rounded-lg border border-slate-300 px-3 py-2"
                    placeholder="Certificate URL..."
                    value={draft.logoUrl}
                    onChange={(e) =>
                        setDraft({ ...draft, logoUrl: e.target.value })
                    }
                />
                <textarea
                    className="min-h-[120px] rounded-lg border border-slate-300 px-3 py-2"
                    placeholder="Description (press <enter> for list)"
                    value={draft.description}
                    onChange={(e) =>
                        setDraft({ ...draft, description: e.target.value })
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
