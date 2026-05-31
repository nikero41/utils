import { useEffect, useRef } from "react";

export const useUpdateEffect = (
	callback: () => void | (() => void) | undefined,
	dependencies: readonly unknown[]
) => {
	const isMounted = useRef(false);

	useEffect(() => {
		if (!isMounted.current) {
			isMounted.current = true;
			return;
		}
		return callback();
	// oxlint-disable-next-line react-hooks/exhaustive-deps
	}, dependencies);
};
