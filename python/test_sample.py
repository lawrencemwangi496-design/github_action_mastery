#!/usr/bin/env python3
"""
Sample test suite for GitHub Actions matrix testing.
Demonstrates basic pytest functionality.
"""

import pytest


def test_addition():
    """Basic test that should always pass."""
    assert 1 + 1 == 2


def test_string_concatenation():
    """Test string operations."""
    assert "hello" + " " + "world" == "hello world"


@pytest.mark.parametrize("input,expected", [
    (2, 4),
    (3, 9),
    (4, 16),
])
def test_square(input, expected):
    """Parameterized test example."""
    assert input ** 2 == expected


class TestMathOperations:
    """Group related tests."""
    
    def test_multiply(self):
        assert 3 * 4 == 12
    
    def test_divide(self):
        assert 10 / 2 == 5


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
