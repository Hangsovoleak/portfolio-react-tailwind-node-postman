function splitMultilineText(value) {
    if (!value || typeof value !== "string") {
        return [];
    }

    return value
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean);
}

function normalizeBulletInput(value) {
    if (Array.isArray(value)) {
        return value
            .map((line) => String(line).trim())
            .filter(Boolean)
            .join("\n");
    }

    if (typeof value === "string") {
        return splitMultilineText(value).join("\n");
    }

    return "";
}

export function toExperienceViewModel(experience) {
    return {
        ...experience,
        time: experience.period,
        bullets: splitMultilineText(experience.description),
        certificate: experience.logoUrl,
    };
}

export function toExperienceApiPayload(formData) {
    return {
        company: formData.company.trim(),
        role: formData.role.trim(),
        period: formData.time.trim(),
        description: normalizeBulletInput(formData.bullets),
        logoUrl: formData.certificateUrl.trim() || null,
    };
}
