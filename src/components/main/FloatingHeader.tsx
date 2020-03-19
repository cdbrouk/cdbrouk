import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { getScrollTop } from '../../lib/utils';

interface FloatingHeaderProps {}

const FloatingHeader = (props: FloatingHeaderProps) => {
  const [visible, setVisible] = useState(false);
  const blockRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [marginTop, setMarginTop] = useState(0);

  useEffect(() => {
    if (!blockRef.current) return;
    setHeight(blockRef.current.clientHeight);
    setMarginTop(-1 * blockRef.current.clientHeight);
  }, []);

  const prevScrollTop = useRef(0);
  const direction = useRef<'UP' | 'DOWN'>('DOWN');
  const transitionPoint = useRef(0);

  const onScroll = useCallback(() => {
    const scrollTop = getScrollTop();
    const nextDirection = prevScrollTop.current > scrollTop ? 'UP' : 'DOWN';

    if (
      direction.current === 'DOWN' &&
      nextDirection === 'UP' &&
      transitionPoint.current - scrollTop < 0
    ) {
      setVisible(true);
      transitionPoint.current = scrollTop;
    }

    if (
      direction.current === 'UP' &&
      nextDirection === 'DOWN' &&
      scrollTop - transitionPoint.current < -1 * height
    ) {
      transitionPoint.current = scrollTop + height;
    }

    if (scrollTop < 108) {
      setVisible(false);
    }

    setMarginTop(
      Math.min(0, -1 * height + transitionPoint.current - scrollTop)
    );

    direction.current = nextDirection;
    prevScrollTop.current = scrollTop;
  }, [height]);

  return <></>;
};

export default FloatingHeader;
