// Copyright 2013 The Flutter Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

precision mediump float;

#include <impeller/types.glsl>

uniform f16sampler2D glyph_atlas_sampler;

layout(constant_id = 0) const float use_alpha_color_channel = 1.0;

in highp vec2 v_uv;

IMPELLER_MAYBE_FLAT in f16vec4 v_text_color;

out f16vec4 frag_color;

void main() {
  f16vec4 value = texture(glyph_atlas_sampler, v_uv);
  if (use_alpha_color_channel == 1.0) {
    frag_color = value.aaaa * v_text_color;
  } else {
    frag_color = value.rrrr * v_text_color;
  }
}
